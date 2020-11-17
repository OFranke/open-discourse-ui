import { SearchResultRow } from "../hooks/use-manage-data";
import {
  Box,
  Text,
  useBreakpointValue,
  Stack,
  Flex,
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
  return (
    <>
      <Box
        width="100%"
        boxShadow="0 5px 25px -12px rgba(0,0,0,0.25)"
        bg="gray.100"
        rounded="md"
        padding={padding}
        borderColor="gray.600"
        backgroundColor="gray.200"
        borderWidth="1px"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Stack direction="column">
            <Text fontWeight="bold">
              {data.firstName + " " + data.lastName}
            </Text>
            <Text>{data.positionShort}</Text>
            <Text>{data.abbreviation}</Text>
          </Stack>
          <Text
            background="gray.100"
            borderColor="gray.300"
            borderWidth="1px"
            padding="5px"
            margin="10px"
            borderRadius="5px"
            textAlign="center"
          >
            {data.speechContent.slice(0, slicePoint) + "..."}
          </Text>
          <Button colorScheme="pink" onClick={onOpen}>
            Mehr
          </Button>
        </Flex>
      </Box>
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
                {data.date && new Date(data.date).toLocaleDateString()}:
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
