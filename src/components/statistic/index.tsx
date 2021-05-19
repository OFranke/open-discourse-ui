import { Card } from "@bit/limebit.limebit-ui.card";
import { Box, chakra } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
interface StatisticImageProps {
  imagePath: string;
  imageAlt: string;
}
export const StatisticImage: React.FC<StatisticImageProps> = ({
  imagePath,
  imageAlt,
}) => {
  const multipleSizesWebp = require(`../../../public/images${imagePath}?resize&sizes[]=480&sizes[]=768&sizes[]=1024&sizes[]=1440&sizes[]=1920&sizes[]=2560&format=webp`);
  const multipleSizes = require(`../../../public/images${imagePath}?resize&sizes[]=480&sizes[]=768&sizes[]=1024&sizes[]=1440&sizes[]=1920&sizes[]=2560&format=jpg`);
  return (
    <picture>
      <source srcSet={multipleSizesWebp.srcSet} type="image/webp" />
      <source srcSet={multipleSizes.srcSet} type="image/jpg" />
      <chakra.img
        alt={imageAlt}
        src={multipleSizes.src}
        width="100%"
        height="100%"
        objectFit="contain"
        loading="lazy"
      />
    </picture>
  );
};

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
            <StatisticImage
              imagePath={"/statistics/datenschutz_graph.png"}
              imageAlt={`Grafik: "Relevanz des Themas Datenschutz seit 1948 aus LDA Topic Modelling mit 250 Topics"`}
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
            <StatisticImage
              imagePath={"/statistics/fluchen_graph.png"}
              imageAlt={`Grafik: "Fluchen im Deutschen Bundestag: Mitte Rechts, Mitte Links und Durschnitt der Parteien."`}
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
            <StatisticImage
              imagePath={"/statistics/klimawandel_graph.png"}
              imageAlt={`Grafik: "Relevanz des Themas Klimawandel seit 1949 aus LDA Topic Modelling mit 250 Topics"`}
            />
          </Card>
        </DefaultContainer>
      </Slider>
    </Box>
  );
};
