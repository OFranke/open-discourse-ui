import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import { Heading } from "@chakra-ui/core";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Heading>Tools und Daten</Heading>
    </BaseTemplate>
  );
};

export default Home;
