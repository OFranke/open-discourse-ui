import { SearchResultRow } from "../hooks/use-manage-data";
import {
  Box,
  Text,
  useBreakpointValue,
  Stack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { DefaultText } from "../../default-text";

interface ResultBoxProps {
  data: SearchResultRow;
  pageSize?: number;
}

export const ResultBox = ({ data }: ResultBoxProps) => {
  const padding = useBreakpointValue({
    base: "2",
    sm: "2",
    md: "3",
    lg: "4",
    xl: "5",
  });
  const slicePoint = useBreakpointValue({ base: 40, sm: 80, md: 120 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const datestring = data.date && new Date(data.date).toLocaleDateString();
  return (
    <>
      <Stack
        maxWidth={{ base: "100%", md: "47vw" }}
        justifyContent="space-between"
        bg="gray.100"
        rounded="md"
        padding={padding}
        borderColor="gray.600"
        backgroundColor="gray.200"
        borderWidth="1px"
      >
        <DefaultText fontWeight="bold">
          {" "}
          {data.firstName + " " + data.lastName} ({data.abbreviation}) -{" "}
          {data.positionShort}
          {datestring ? <>, am {datestring}</> : null}:
        </DefaultText>
        <DefaultText noOfLines={{ base: 4, md: 6 }}>
          {data.speechContent}
        </DefaultText>

        <Button colorScheme="pink" onClick={onOpen}>
          Mehr
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Redebeitrag</ModalHeader>
            <ModalCloseButton
              bg="pink.500"
              color="white"
              _hover={{ bg: "pink.600" }}
            />

            <ModalBody>
              <Text mb="0.8rem">
                {data.documentUrl && (
                  <Link href={data.documentUrl} isExternal>
                    Zum Plenarprotokoll
                  </Link>
                )}
              </Text>
              <Text fontWeight="bold" mb="0.5rem">
                {data.firstName} {data.lastName} ({data.abbreviation}),{" "}
                {datestring}:
              </Text>
              <Text whiteSpace="pre-line">{data.speechContent}</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="pink" mr={3} onClick={onClose}>
                Schließen
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ResultBox;
