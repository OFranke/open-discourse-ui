import { Box, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./styles.module.css";
import { Slide1, Slide2 } from "./paper-slides";
import { DefaultContainer, containerSizes } from "../default-container";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";

interface NavigationSlideProps extends FlexProps {
  slideId: number;
  activeSlideId: number;
}
const NavigationSlide: React.FC<NavigationSlideProps> = ({
  slideId,
  activeSlideId,
  children,
  ...props
}) => {
  const isCurrentSlideActive = slideId == activeSlideId;
  const theme: any = useTheme();

  const activeAndHoverStyle = {
    content: '""',
    display: "inline-block",
    width: "100%",
    borderBottom: `4px solid ${theme.colors.pink[500]}`,
  };

  const width = {
    base: "150px",
    sm: "200px",
    md: "250px",
    xl: "300px",
  };
  const height = {
    base: "80px",
    lg: "120px",
  };
  return (
    <Box
      paddingY="5"
      width={width}
      marginX="5"
      //   paddingX="2"
      _after={isCurrentSlideActive ? activeAndHoverStyle : undefined}
      //   _hover={isCurrentSlideActive ? undefined : activeAndHoverStyle}
    >
      <Flex
        backgroundColor="white"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 20px 5px, rgba(0, 0, 0, 0.2) 0px 0px 1px 0px;"
        rounded="md"
        padding="2"
        width={width}
        height={height}
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

interface NavState {
  nav1: any;
  nav2: any;
  activeSlide: number;
}
export const PaperCarousel: React.FC = () => {
  const [navState, setNavState] = useState<NavState>({
    nav1: null,
    nav2: null,
    activeSlide: 0,
  });
  let slider1ref: any;
  let slider2ref: any;

  useEffect(() => {
    setNavState({ ...navState, nav1: slider1ref, nav2: slider2ref });
  }, [slider1ref, slider2ref]);

  const displayBgImage = { base: "none", lg: "block" };

  const bgNegativeMargin = { base: 0, lg: -300, xl: -600 };

  return (
    <>
      <Box maxWidth={containerSizes["l"]} marginX="auto">
        <Slider
          asNavFor={navState.nav2}
          ref={(slider) => (slider1ref = slider)}
          slidesToShow={3}
          infinite={true}
          centerMode={true}
          variableWidth={true}
          swipeToSlide={true}
          focusOnSelect={true}
          speed={1000}
          arrows={false}
          beforeChange={(current, next) =>
            setNavState({ ...navState, activeSlide: next })
          }
          responsive={[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                swipeToSlide: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                centerMode: false,
                infinite: false,
              },
            },
          ]}
        >
          <div>
            <NavigationSlide slideId={0} activeSlideId={navState.activeSlide}>
              <Box
                width={{
                  base: "65px",
                  sm: "65px",
                  md: "80px",
                  lg: "120px",
                  xl: "120px",
                }}
              >
                <Image
                  src={"/images/logos/akademische_forschung_logo.svg"}
                  alt={"Open Discourse Logo"}
                  layout="responsive"
                  width="1280px"
                  height="944px"
                  quality="75"
                />
              </Box>
            </NavigationSlide>
          </div>
          <div>
            <NavigationSlide slideId={1} activeSlideId={navState.activeSlide}>
              <Box
                width={{
                  base: "40px",
                  sm: "40px",
                  md: "50px",
                  lg: "75px",
                  xl: "75px",
                }}
              >
                <Image
                  src={"/images/logos/correlaid_logo.svg"}
                  alt={"Open Discourse Logo"}
                  layout="responsive"
                  width="515px"
                  height="645px"
                  quality="75"
                />
              </Box>
            </NavigationSlide>
          </div>
          <div>
            <NavigationSlide slideId={2} activeSlideId={navState.activeSlide}>
              <Box
                width={{
                  base: "50px",
                  sm: "50px",
                  md: "65px",
                  lg: "100px",
                  xl: "100px",
                }}
              >
                <Image
                  src={"/images/logos/zdf_heute_logo.jpg"}
                  alt={"Open Discourse Logo"}
                  layout="responsive"
                  width="900px"
                  height="900px"
                  quality="75"
                />
              </Box>
            </NavigationSlide>
          </div>
        </Slider>
      </Box>
      {/* <DefaultContainer size="l"> */}

      <Slider
        asNavFor={navState.nav1}
        ref={(slider) => (slider2ref = slider)}
        slidesToShow={1}
        swipeToSlide={true}
        infinite={true}
        speed={1000}
        arrows={false}
      >
        <div>
          <Box
            display={displayBgImage}
            className={displayBgImage && styles.backgroundImageOpenDiscourse}
            height={"60vh"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
          <DefaultContainer size="l" marginTop={bgNegativeMargin}>
            <Slide1 />
          </DefaultContainer>
        </div>
        <div>
          <Box
            display={displayBgImage}
            className={displayBgImage && styles.backgroundImageFom}
            height={"60vh"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
          <DefaultContainer size="l" marginTop={bgNegativeMargin}>
            <Slide2 />
          </DefaultContainer>
        </div>
        <div>
          <Box
            display={displayBgImage}
            className={displayBgImage && styles.backgroundImageZdf}
            height={"60vh"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
          <DefaultContainer size="l" marginTop={bgNegativeMargin}>
            <Slide1 />
          </DefaultContainer>
        </div>
      </Slider>
      {/* </DefaultContainer> */}
    </>
  );
};
