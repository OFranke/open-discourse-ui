import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import { Heading, Image, Flex } from "@chakra-ui/core";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Flex direction="column">
        <Heading>test</Heading>
        <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
      </Flex>
    </BaseTemplate>
  );
};

export default Home;
