import { Card } from "@bit/limebit.limebit-ui.card";
import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import Image from "next/image";

export const Statistic: React.FC = () => {
  const size = "50px";
  return (
    <Box
      marginX="auto"
      className={styles.activeSlideStyle}
      display={{ base: "inline", lg: "block" }}
    >
      <Slider
        infinite={true}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        speed={1000}
        arrows={true}
        dots={true}
        prevArrow={
          <Box
            _before={{ fontSize: size }}
            zIndex="200"
            height={size}
            width={size}
            position="absolute"
            top={"50%"}
            left="5px"
          />
        }
        nextArrow={
          <Box
            _before={{ fontSize: size }}
            color="blue"
            zIndex="200"
            height={size}
            width={size}
            position="absolute"
            top={"50%"}
            right="5px"
          />
        }
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
            },
          },
        ]}
      >
        <DefaultContainer size={"l"}>
          <Card
            backgroundColor="white"
            marginX={{ base: 2, lg: "14" }}
            marginY={{
              base: "4",
              sm: "14",
              md: "20",
              lg: "20",
              xl: "32",
            }}
          >
            <Image
              src={"/images/statistics/datenschutz_graph.png"}
              alt={`Grafik: "Relevanz des Themas Datenschutz seit 1948 aus LDA Topic Modelling mit 250 Topics"`}
              layout="intrinsic"
              width={3840}
              height={2160}
            />
          </Card>
        </DefaultContainer>
        <DefaultContainer size={"l"}>
          <Card
            backgroundColor="white"
            marginX={{ base: 2, lg: "14" }}
            marginY={{
              base: "4",
              sm: "14",
              md: "20",
              lg: "20",
              xl: "32",
            }}
          >
            <Image
              src={"/images/statistics/fluchen_graph.png"}
              alt={`Grafik: "Fluchen im Deutschen Bundestag: Mitte Rechts, Mitte Links und Durschnitt der Parteien."`}
              layout="intrinsic"
              width={3840}
              height={2160}
            />
          </Card>
        </DefaultContainer>
        <DefaultContainer size={"l"}>
          <Card
            backgroundColor="white"
            marginX={{ base: 2, lg: "14" }}
            marginY={{
              base: "4",
              sm: "14",
              md: "20",
              lg: "20",
              xl: "32",
            }}
          >
            <Image
              src={"/images/statistics/klimawandel_graph.png"}
              alt={`Grafik: "Relevanz des Themas Klimawandel seit 1949 aus LDA Topic Modelling mit 250 Topics"`}
              layout="intrinsic"
              width={3840}
              height={2160}
            />
          </Card>
        </DefaultContainer>
      </Slider>
    </Box>
  );
};
