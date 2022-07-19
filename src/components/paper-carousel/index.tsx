import { Box, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { chakra, ResponsiveValue } from "@chakra-ui/react";
import * as CSS from "csstype";
import { containerSizes } from "@bit/limebit.limebit-ui.default-container";
import Image from "next/image";

interface NavigationSlideProps extends FlexProps {
  imagePath: string;
  imageAlt: string;
  width: number;
  height: number;
}
const NavigationSlide: React.FC<NavigationSlideProps> = ({
  imagePath,
  imageAlt,
  width,
  height,
}) => {
  return (
    <Box
      paddingY="5"
      marginX="5"
      className="activeBorder"
      _hover={{ cursor: "pointer" }}
    >
      <Flex
        backgroundColor="white"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 20px 5px, rgba(0, 0, 0, 0.2) 0px 0px 1px 0px;"
        rounded="md"
        padding="2"
        justifyContent={"center"}
        width={{
          base: "100px",
          sm: "120px",
          md: "180px",
          lg: "220px",
          xl: "260px",
        }}
        height="100px"
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          width={width}
          height={height}
          layout="intrinsic"
          // objectFit="fill"
        />
      </Flex>
    </Box>
  );
};

interface NavState {
  nav1: any;
  nav2: any;
}

interface PaperCarouselProps {
  children: React.ReactNode;
  gap: ResponsiveValue<CSS.Property.Top<string | 0 | number>>;
  top: ResponsiveValue<CSS.Property.Top<string | 0 | number>>;
  size?: ResponsiveValue<CSS.Property.Top<string | 0 | number>>;
  showArrows?: boolean;
}

export const PaperCarousel: React.FC<PaperCarouselProps> = ({
  children,
  size,
  gap,
  top,
  showArrows,
}) => {
  const [navState, setNavState] = useState<NavState>({
    nav1: null,
    nav2: null,
  });
  let slider1ref: any;
  let slider2ref: any;
  useEffect(() => {
    setNavState({ ...navState, nav1: slider1ref, nav2: slider2ref });
  }, [slider1ref, slider2ref]);

  return (
    <>
      <Box
        maxWidth={containerSizes["l"]}
        marginX="auto"
        className={styles.activeSlideStyle}
        display={{ base: "inline", lg: "block" }}
      >
        <Slider
          asNavFor={navState.nav2}
          ref={(slider) => (slider1ref = slider)}
          slidesToShow={4}
          infinite={false}
          centerMode={true}
          variableWidth={true}
          swipeToSlide={true}
          focusOnSelect={true}
          speed={1000}
          arrows={false}
          // responsiveness is configured from top to bottom, default settings apply to biggest breakpoint.
          // So {breakpoint:1920 means 1920 and below}
          responsive={[
            {
              // 1920 and below
              breakpoint: 1920,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              // 1200 and below
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                infinite: true,
                useTransform: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                infinite: true,
              },
            },
          ]}
        >
          <NavigationSlide
            imagePath="/images/logos/correlaid_logo.svg"
            imageAlt="Correlaid Logo"
            width={100}
            height={100}
          />
          <NavigationSlide
            imagePath="/images/logos/zdf_heute_logo.png"
            imageAlt="ZDF Heute Logo"
            width={100}
            height={100}
          />
          <NavigationSlide
            imagePath="/images/logos/ccc_logo.svg"
            imageAlt="Chaos Computer Club Logo"
            width={137.5}
            height={100}
          />
          <NavigationSlide
            imagePath="/images/logos/akademische_forschung_logo.svg"
            imageAlt="Akademische Forschung Logo"
            width={135.5}
            height={100}
          />
        </Slider>
      </Box>

      <Slider
        asNavFor={navState.nav1}
        ref={(slider) => (slider2ref = slider)}
        slidesToShow={1}
        swipeToSlide={true}
        infinite={true}
        speed={1000}
        arrows={showArrows}
        prevArrow={
          <Box
            _before={{ fontSize: size }}
            zIndex="200"
            height={size}
            width={size}
            position="absolute"
            left={gap}
            top={top}
          />
        }
        nextArrow={
          <Box
            _before={{ fontSize: size }}
            zIndex="200"
            height={size}
            width={size}
            position="absolute"
            right={gap}
            top={top}
          />
        }
      >
        {children}
      </Slider>
    </>
  );
};
