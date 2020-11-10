import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import { Heading, Image, Flex, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { BodyText } from "../components/body-text";
import { HeroWithCta } from "../components/hero-with-cta";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <BodyText>{"Hello World"}</BodyText>
      <HeroWithCta />
    </BaseTemplate>
  );
};

export default Home;
