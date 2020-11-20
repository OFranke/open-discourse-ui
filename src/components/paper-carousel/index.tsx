import {
  Box,
  Container,
  Flex,
  FlexProps,
  useBreakpointValue,
} from "@chakra-ui/react";
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
    xl: "300px",
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

const NavigationSliderWrapper: React.FC = ({ children }) => {
  const isLgScreen = useBreakpointValue({ base: false, lg: true });

  const containerSizes = {
    s: { base: "100vw", sm: "400px", md: "500px", lg: "850px", xl: "60vw" },
    m: { base: "100vw", sm: "500px", md: "600px", lg: "1050px", xl: "65vw" },
    l: { base: "100vw", sm: "500px", md: "900px", lg: "1250px", xl: "70vw" },
    xl: { base: "100vw", sm: "500px", md: "900px", lg: "1400px", xl: "80vw" },
  };

  if (isLgScreen) {
    return (
      <Box maxWidth={containerSizes["l"]} marginX="auto">
        {children}
      </Box>
    );
  }
  return <>{children}</>;
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
    md: 2,
    lg: 4,
    xl: 4,
  });
  console.log("\x1b[33m%s\x1b[0m", "%c >> activeSlide", navState);
  const containerSizes = {
    s: { base: "100vw", sm: "400px", md: "500px", lg: "850px", xl: "60vw" },
    m: { base: "100vw", sm: "500px", md: "600px", lg: "1050px", xl: "65vw" },
    l: { base: "100vw", sm: "500px", md: "900px", lg: "1250px", xl: "70vw" },
    xl: { base: "100vw", sm: "500px", md: "900px", lg: "1400px", xl: "80vw" },
  };
  return (
    <>
      <Box maxWidth={containerSizes["l"]} marginX="auto">
        <Slider
          asNavFor={navState.nav2}
          ref={(slider) => (slider1ref = slider)}
          slidesToShow={3}
          infinite={true}
          centerMode={true}
          variableWidth={useBreakpointValue({ base: true })}
          focusOnSelect={true}
          speed={1000}
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
        //   centerMode={true}
      >
        <div>
          <DefaultContainer size="l">
            <Slide1 />
          </DefaultContainer>
        </div>
        <div>
          <DefaultContainer size="l">
            <Slide2 />
          </DefaultContainer>
        </div>
        <div>
          <DefaultContainer size="l">
            <Slide1 />
          </DefaultContainer>
        </div>
      </Slider>
      {/* </DefaultContainer> */}
    </>
  );
};
