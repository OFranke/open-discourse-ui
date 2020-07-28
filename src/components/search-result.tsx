import { Flex, Stack } from "@chakra-ui/core";
import { FormParams } from "./search-form";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { useRouter } from "next/router";

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
  const router = useRouter();
  console.log("\x1b[33m%s\x1b[0m", ">> router", router);
  useEffect(() => {
    const callApiAsync = async () => {
      // if (loading) {
      // setLoading(false);
      const searchApiEndpoint = `/api/suche${window.location.search}`;

      const searchResult = await fetch(searchApiEndpoint, {
        headers: { "Content-Type": "application/json" },
      }).then((response) => response.json());
      console.log("\x1b[33m%s\x1b[0m", ">> searchResult async", searchResult);
      setData(searchResult.data);
      // }
    };

    callApiAsync();
  }, [router.query]);

  console.log("\x1b[33m%s\x1b[0m", ">> SearchResult data", data);
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
