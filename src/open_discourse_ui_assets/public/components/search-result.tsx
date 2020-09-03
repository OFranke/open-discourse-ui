import { Stack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory as useRouter, useLocation } from "react-router-dom";

import {
  Link,
  Icon,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";

interface SearchResultRow {
  date: string;
  firstName: string;
  lastName: string;
  documentUrl: string;
  position: string;
  speechContent: string;
}
type Row = {
  values: SearchResultRow;
};

const columns = [
  {
    Header: "Vorname",
    accessor: "firstName",
    Cell: ({ row }: { row: Row }) => {
      if (row.values.firstName) {
        return <Text>{row.values.firstName}</Text>;
      }
      return null;
    },
  },
  {
    Header: "Nachname",
    accessor: "lastName",
    Cell: ({ row }: { row: Row }) => {
      if (row.values.lastName) {
        return <Text>{row.values.lastName}</Text>;
      }
      return null;
    },
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Datum",
    accessor: "date",
    Cell: ({ row }: { row: Row }) => {
      if (row.values.date) {
        return <Text>{new Date(row.values.date).toLocaleDateString()}</Text>;
      }
      return null;
    },
  },
  {
    Header: "Url",
    accessor: "documentUrl",
    Cell: ({ row }: { row: Row }) => {
      if (row.values.documentUrl) {
        return (
          <Link href={row.values.documentUrl} isExternal>
            Protokoll <Icon name="external-link" mx="2px" />
          </Link>
        );
      }
      return null;
    },
  },
  {
    Header: "Rede",
    accessor: "speechContent",
    Cell: ({ row }: { row: Row }) => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      if (row.values.speechContent) {
        return (
          <>
            <Text>
              <Link onClick={onOpen}>{"anzeigen"}</Link>
            </Text>

            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Redebeitrag</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                  <Text mb="0.8rem">
                    {row.values.documentUrl && (
                      <Link href={row.values.documentUrl} isExternal>
                        Zum Plenarprotokoll{" "}
                        <Icon name="external-link" mx="2px" />
                      </Link>
                    )}
                  </Text>
                  <Text fontWeight="bold" mb="0.5rem">
                    {row.values.firstName} {row.values.lastName} (
                    {row.values.position}),{" "}
                    {row.values.date &&
                      new Date(row.values.date).toLocaleDateString()}
                    :
                  </Text>
                  <Text>{row.values.speechContent}</Text>
                </ModalBody>

                <ModalFooter>
                  <Button variantColor="blue" mr={3} onClick={onClose}>
                    Schließen
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        );
      }
    },
  },
];

export const SearchResult: React.FC = () => {
  const [data, setData] = useState<{ ftSearchSpeeches: SearchResultRow[] }>();
  // const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search);

  const queryParams = {
    contentQuery: query.get("contentQuery"),
    nameQuery: query.get("nameQuery"),
    positionQuery: query.get("positionQuery"),
    fromDate: query.get("fromDate"),
    toDate: query.get("toDate"),
  };

  const contentQuery = query.get("contentQuery");
  const nameQuery = query.get("nameQuery");
  const positionQuery = query.get("positionQuery");
  const fromDate = query.get("fromDate");
  const toDate = query.get("toDate");

  useEffect(() => {
    const callApiAsync = async () => {

      const result = await fetch("https://od-graphql.herokuapp.com/graphql", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: `{"operationName":"Search","variables":{"first":50,"contentQuery":"${
          contentQuery || ""
        }","positionQuery":"${positionQuery || ""}","nameQuery":"${
          nameQuery || ""
        }"${fromDate ? `,"fromDate":"${fromDate}"` : ""}${
          toDate ? `,"toDate":"${toDate}"` : ""
        }},"query":"query Search($nameQuery: String, $contentQuery: String, $positionQuery: String, $fromDate: Date, $toDate: Date, $first: Int!) {\\n  ftSearchSpeeches(first: $first, nameQuery: $nameQuery, contentQuery: $contentQuery, positionQuery: $positionQuery, fromDate: $fromDate, toDate: $toDate) {\\n    rank\\n    id\\n    firstName\\n    lastName\\n    position\\n    date\\n    documentUrl\\n    speechContent\\n    __typename\\n  }\\n}\\n"}`,
      });
      const searchResult = await result.json();
      setData(searchResult.data);
    };

    callApiAsync();
  }, [contentQuery, nameQuery, positionQuery, fromDate, toDate]);

  return (
    <>
      <Stack direction="row" spacing="3">
        <Text>Datum</Text>
        <Text>Name</Text>
        <Text>Position</Text>
        <Text>Rede</Text>
      </Stack>
      {data?.ftSearchSpeeches?.map((searchResultRow) => (
        <Stack direction="row" spacing="3">
          <Text>{searchResultRow.date}</Text>
          <Text>
            {searchResultRow.firstName} {searchResultRow.lastName}
          </Text>
          <Text>{searchResultRow.position}</Text>
          <Text isTruncated>{searchResultRow.speechContent}</Text>
        </Stack>
      ))}
    </>
  );
};
