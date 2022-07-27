import { Link, Text, useDisclosure, Checkbox, Flex } from "@chakra-ui/react";
import { ReactTable } from "@bit/limebit.chakra-ui-recipes.react-table";
import type { Column } from "react-table";
import React, { useReducer } from "react";
import { SearchResultRow } from "../hooks/use-manage-data";
import { DownloadButton } from "./download-button";
import { positions } from "../search-form";
import { SpeechModal } from "../speech-modal";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";

interface ResultTableProps {
  data: SearchResultRow[];
}

type SelectedState = { [id: number]: boolean };
type SelectedAction = {
  action: "toggleSingle";
  id: number;
};

export const convertPosition = (position: string) => {
  return positions.find((element) => element.key == position)?.label || "";
};

export const ResultTable = ({ data }: ResultTableProps) => {
  const [selected, dispatchSelected] = useReducer(
    (currentState: SelectedState, action: SelectedAction): SelectedState => {
      switch (action.action) {
        case "toggleSingle":
          return {
            ...currentState,
            [action.id]: !currentState[action.id],
          };
      }
    },
    Object.fromEntries(data.map((element) => [element.downloadId, false]))
  );

  const columns: Column<SearchResultRow>[] = [
    {
      Header: "Herunterladen",
      accessor: "downloadId",
      Cell: ({ row }) => {
        if (row.original.downloadId || row.original.downloadId === 0) {
          return (
            <Checkbox
              colorScheme="pink"
              borderColor="pink.500"
              isChecked={selected[row.original.downloadId]}
              onChange={() => {
                dispatchSelected({
                  action: "toggleSingle",
                  id: row.original.downloadId,
                });
              }}
            />
          );
        }
        return null;
      },
    },
    {
      Header: "ID",
      accessor: "id",
    },
    { Header: "Vorname", accessor: "firstName" },
    { Header: "Nachname", accessor: "lastName" },
    { Header: "Fraktion", accessor: "abbreviation" },
    { Header: "Position", accessor: "positionShort" },
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ row }) => {
        if (row.original.date) {
          return (
            <Text>{new Date(row.original.date).toLocaleDateString()}</Text>
          );
        }
        return null;
      },
    },
    {
      Header: "Url",
      accessor: "documentUrl",
      Cell: ({ row }) => {
        if (row.original.documentUrl) {
          return (
            <NextChakraLink
              href={`/plenarsitzungen/${row.original.electoralTerm}-${row.original.session}`}
              fontWeight="bold"
            >
              Protokoll
            </NextChakraLink>
          );
        }
        return null;
      },
    },
    {
      Header: "Rede",
      accessor: "speechContent",
      Cell: ({ row }) => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        if (row.original.speechContent || row.original.speechContent === "") {
          return (
            <>
              <Link as="button" onClick={onOpen} fontWeight="bold">
                anzeigen
              </Link>
              <SpeechModal
                data={row.original}
                isOpen={isOpen}
                onClose={onClose}
              />
            </>
          );
        }
        return null;
      },
    },
  ];
  return (
    <>
      <ReactTable
        columns={columns}
        data={data.map((element) => {
          return {
            ...element,
            abbreviation:
              element.abbreviation == "not found"
                ? "Ohne Zuordnung"
                : element.abbreviation,
            positionShort: convertPosition(element.positionShort),
          };
        })}
        pageSize={10}
        colors={{ evenColor: "gray.200", tableHeadColor: "gray.200" }}
      />
      <Flex justifyContent="space-between">
        <DownloadButton data={data} text={"Alle Ergebnisse Herunterladen"} />
        {Object.entries(selected).some(([_id, state]) => state) ? (
          <DownloadButton
            data={data.filter((element) => selected[element.downloadId])}
            text={"Ausgewählte Ergebnisse Herunterladen"}
          />
        ) : null}
      </Flex>
    </>
  );
};
