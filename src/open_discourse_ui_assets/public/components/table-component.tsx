import { ReactTable } from "@bit/limebit.adana-ui.react-table";
import { useInlineEdit } from "@bit/limebit.adana-ui.react-table/dist/react-table/use-inline-edit";
import {
  Link,
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
  Icon,
} from "@chakra-ui/core";
import { SearchResultRow } from "./search-result";
import React, { ReactElement } from "react";

interface TableComponentProps {
    tableData: object[]
}

type Row = {
  values: SearchResultRow;
};

const columns = [
  {
    Header: "Vorname",
    accessor: "firstName",
  },
  {
    Header: "Nachname",
    accessor: "lastName",
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
                <ModalHeader color="white">Redebeitrag</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                  <Text mb="0.8rem" color="white">
                      {row.values.documentUrl && (
                        <Link href={row.values.documentUrl} isExternal>
                          Zum Plenarprotokoll{" "}
                          <Icon name="external-link" mx="2px" />
                        </Link>
                      )}
                    </Text>
                  <Text fontWeight="bold" mb="0.5rem" color="white">
                    {row.values.firstName} {row.values.lastName} (
                    {row.values.position}),{" "}
                    {row.values.date &&
                      new Date(row.values.date).toLocaleDateString()}
                    :
                  </Text>
                  <Text color="white">{row.values.speechContent}</Text>
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

export const TableComponent = ({tableData}: TableComponentProps): ReactElement => {
  const { data } = useInlineEdit({
    tableData,
  });
  return <ReactTable columns={columns} data={data} pageSize={10} />;
};
