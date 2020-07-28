import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import { Heading } from "@chakra-ui/core";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Heading>About</Heading>
    </BaseTemplate>
  );
};

export default Home;
