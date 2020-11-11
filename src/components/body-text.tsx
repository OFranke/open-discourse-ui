import { useColorModeValue, Text, Heading } from "@chakra-ui/core";

export const BodyText: React.FC = ({ children }) => {
  return (
    <>
      <Heading as="h1" size="4xl" isTruncated>
        (4xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="3xl" isTruncated>
        (3xl) In love with React & Next
      </Heading>
      <Text
        fontSize={["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]}
        fontFamily="'Source Sans Pro', sans-serif"
        m="6"
      >
        {children}
      </Text>
    </>
  );
};
