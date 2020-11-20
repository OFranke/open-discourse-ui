import { Box, Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./styles.module.css";
import { Slide1, Slide2 } from "./paper-slides";
import { DefaultContainer } from "../default-container";
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

  const width = useBreakpointValue({
    base: "150px",
    sm: "200px",
    md: "250px",
    lg: "300px",
  });
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
        height="80px"
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
  const slidesToShow = useBreakpointValue({
    base: 1,
    lg: 4,
  });
  console.log("\x1b[33m%s\x1b[0m", "%c >> activeSlide", navState);
  return (
    <>
      <Slider
        asNavFor={navState.nav2}
        ref={(slider) => (slider1ref = slider)}
        slidesToShow={slidesToShow}
        infinite={true}
        centerMode={true}
        variableWidth={true}
        focusOnSelect={true}
        speed={1000}
        beforeChange={(current, next) =>
          setNavState({ ...navState, activeSlide: next })
        }
      >
        <div>
          <NavigationSlide slideId={0} activeSlideId={navState.activeSlide}>
            <Box
              width={{
                base: "150px",
                sm: "120px",
                md: "150px",
                lg: "150px",
                xl: "240px",
              }}
            >
              <Image
                src={"/images/logos/open_discourse.png"}
                alt={"Open Discourse Logo"}
                layout="responsive"
                width="1250px"
                height="400px"
                quality="75"
              />
            </Box>
          </NavigationSlide>
        </div>
        <div>
          <NavigationSlide slideId={1} activeSlideId={navState.activeSlide}>
            <Box
              width={{
                base: "150px",
                sm: "120px",
                md: "150px",
                lg: "150px",
                xl: "240px",
              }}
            >
              <Image
                src={"/images/logos/open_discourse.png"}
                alt={"Open Discourse Logo"}
                layout="responsive"
                width="1250px"
                height="400px"
                quality="75"
              />
            </Box>
          </NavigationSlide>
        </div>
        <div>
          <NavigationSlide slideId={2} activeSlideId={navState.activeSlide}>
            <Box
              width={{
                base: "150px",
                sm: "120px",
                md: "150px",
                lg: "150px",
                xl: "240px",
              }}
            >
              <Image
                src={"/images/logos/open_discourse.png"}
                alt={"Open Discourse Logo"}
                layout="responsive"
                width="1250px"
                height="400px"
                quality="75"
              />
            </Box>
          </NavigationSlide>
        </div>
        <div>
          <NavigationSlide slideId={3} activeSlideId={navState.activeSlide}>
            <Box
              width={{
                base: "150px",
                sm: "120px",
                md: "150px",
                lg: "150px",
                xl: "240px",
              }}
            >
              <Image
                src={"/images/logos/open_discourse.png"}
                alt={"Open Discourse Logo"}
                layout="responsive"
                width="1250px"
                height="400px"
                quality="75"
              />
            </Box>
          </NavigationSlide>
        </div>
      </Slider>

      {/* <DefaultContainer size="l"> */}
      <Slider
        asNavFor={navState.nav1}
        ref={(slider) => (slider2ref = slider)}
        slidesToShow={1}
        swipeToSlide={true}
        speed={1000}
        //   centerMode={true}
      >
        <DefaultContainer size="l">
          <Slide1 />
        </DefaultContainer>
        <DefaultContainer size="l">
          <Slide2 />
        </DefaultContainer>
        <DefaultContainer size="l">
          <Slide1 />
        </DefaultContainer>
        <DefaultContainer size="l">
          <Slide2 />
        </DefaultContainer>
      </Slider>
      {/* </DefaultContainer> */}
    </>
  );
};
