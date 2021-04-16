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

interface NavigationSlideProps extends FlexProps {
  imagePath: string;
  imageAlt: string;
}
const NavigationSlide: React.FC<NavigationSlideProps> = ({
  imagePath,
  imageAlt,
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
      >
        <picture>
          <source
            srcSet={require(`../../../public/images${imagePath}?resize&size=480&format=webp`)}
            type="image/webp"
          />
          <source
            srcSet={require(`../../../public/images${imagePath}?resize&size=480&format=png`)}
            type="image/png"
          />
          <chakra.img
            width={{
              base: "100px",
              sm: "120px",
              md: "180px",
              lg: "220px",
              xl: "260px",
            }}
            height="100px"
            alt={imageAlt}
            src={require(`../../../public/images${imagePath}`)}
            objectFit="contain"
          />
        </picture>
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
            imagePath="/logos/correlaid_logo.svg"
            imageAlt="Correlaid Logo"
          />
          <NavigationSlide
            imagePath="/logos/zdf_heute_logo.png"
            imageAlt="ZDF Heute Logo"
          />
          <NavigationSlide
            imagePath="/logos/ccc_logo.svg"
            imageAlt="Chaos Computer Club Logo"
          />
          <NavigationSlide
            imagePath="/logos/akademische_forschung_logo.svg"
            imageAlt="Akademische Forschung Logo"
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
