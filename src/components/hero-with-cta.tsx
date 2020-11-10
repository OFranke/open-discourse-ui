import { Box, Text, Flex } from "@chakra-ui/core";
import Image from "next/image";
import styles from "./hero-with-cta.module.css";
const BackgroundImageContainer: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export const HeroWithCta = () => {
  return <Background></Background>;
};

const Background = () => (
  <Flex
    className={styles.backgroundImage}
    height="90vh"
    maxHeight="750px"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
  >
    {/* <Box
      position="fixed"
      height="90vh"
      width="100vw"
      overflow="hidden"
      zIndex="-1"
      backgroundImage={"/images/sample/teamwork.jpg"}
    > */}
    {/* <Image
      alt="Mountains"
      src="/images/sample/teamwork.jpg"
      layout="fill"
      //   maxHeight="750px"
      //   height="100vh"
      quality={100}
    /> */}
  </Flex>
);
