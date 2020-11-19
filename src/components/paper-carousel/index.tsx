import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./styles.module.css";
import { Slide1 } from "./slide-1";
import { Slide2 } from "./slide-2";
import { DefaultContainer } from "../default-container";
import { useState, useEffect } from "react";

const NavigationSlide: React.FC = ({ children }) => {
  return (
    <Box height="150px" paddingTop="5">
      {children}
    </Box>
  );
};

interface NavState {
  nav1: any;
  nav2: any;
}
export const PaperCarousel: React.FC = () => {
  const [navState, setNavState] = useState<NavState>({
    nav1: null,
    nav2: null,
  });
  let slider1ref: any;
  let slider2ref: any;

  useEffect(() => {
    setNavState({ nav1: slider1ref, nav2: slider2ref });
  }, [slider1ref, slider2ref]);
  const slidesToShow = useBreakpointValue({
    base: 1,
    lg: 4,
  });
  return (
    <>
      <DefaultContainer size="l">
        <Slider
          className={styles.slider}
          asNavFor={navState.nav2}
          ref={(slider) => (slider1ref = slider)}
          slidesToShow={slidesToShow}
          infinite={true}
          centerMode={true}
        >
          <div>
            <NavigationSlide>
              <Flex
                boxShadow="dark-lg"
                rounded="md"
                padding="2"
                width="150px"
                height="80px"
                justifyContent="center"
                alignItems="center"
              >
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
              </Flex>
            </NavigationSlide>
          </div>
          <div>
            <NavigationSlide>
              <Flex
                boxShadow="dark-lg"
                rounded="md"
                padding="2"
                width="150px"
                height="80px"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width={{
                    base: "38px",
                    sm: "120px",
                    md: "150px",
                    lg: "150px",
                    xl: "240px",
                  }}
                >
                  <Image
                    src={"/images/logos/fom_logo.png"}
                    alt={"FOM Logo"}
                    layout="responsive"
                    width="120px"
                    height="120px"
                    quality="75"
                  />
                </Box>
              </Flex>
            </NavigationSlide>
          </div>
          <div>
            <NavigationSlide>
              <Flex
                boxShadow="dark-lg"
                rounded="md"
                padding="2"
                width="150px"
                height="80px"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width={{
                    base: "38px",
                    sm: "120px",
                    md: "150px",
                    lg: "150px",
                    xl: "240px",
                  }}
                >
                  <Image
                    src={"/images/logos/fom_logo.png"}
                    alt={"FOM Logo"}
                    layout="responsive"
                    width="120px"
                    height="120px"
                    quality="75"
                  />
                </Box>
              </Flex>
            </NavigationSlide>
          </div>
          <div>
            <NavigationSlide>
              <Flex
                boxShadow="dark-lg"
                rounded="md"
                padding="2"
                width="150px"
                height="80px"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width={{
                    base: "38px",
                    sm: "120px",
                    md: "150px",
                    lg: "150px",
                    xl: "240px",
                  }}
                >
                  <Image
                    src={"/images/logos/fom_logo.png"}
                    alt={"FOM Logo"}
                    layout="responsive"
                    width="120px"
                    height="120px"
                    quality="75"
                  />
                </Box>
              </Flex>
            </NavigationSlide>
          </div>
        </Slider>
      </DefaultContainer>
      <DefaultContainer size="l">
        <Box
          className={styles.shadowed}
          marginTop="10"
          marginX="2"
          padding="4"
          backgroundImage="linear-gradient(rgba(255, 255, 255, 1), rgba(247, 250, 252, 1))"
        >
          <Slider
            asNavFor={navState.nav1}
            ref={(slider) => (slider2ref = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <Slide1 />
            </div>
            <div>
              <Slide2 />
            </div>
            <div>
              <Slide1 />
            </div>
            <div>
              <Slide2 />
            </div>
          </Slider>
        </Box>
      </DefaultContainer>
    </>
  );
};
