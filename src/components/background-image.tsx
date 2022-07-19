import { Flex, FlexProps, Box } from "@chakra-ui/react";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import Image from "next/image";

export interface BackgroundImageProps extends FlexProps {
  imagePath: string;
  altText: string;
  imageAuthor?: string;
  backgroundPosition?: string;
  imagePriority?: boolean;
}

export const backgroundImageHeight = {
  base: "50vh",
  sm: "64vh",
  md: "70vh",
  lg: "75vh",
  xl: "80vh",
};

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  children,
  imagePath,
  altText,
  height,
  width,
  imageAuthor,
  backgroundPosition,
  imagePriority,
  ...flexProps
}) => {
  return (
    <Flex
      position={"relative"}
      width={width || "100%"}
      backgroundSize="cover"
      height={
        height || {
          base: "50vh",
          sm: "64vh",
          md: "70vh",
          lg: "75vh",
          xl: "80vh",
        }
      }
      {...flexProps}
    >
      <Image
        src={imagePath}
        alt={altText}
        layout="fill"
        objectFit="cover"
        priority={imagePriority}
      />
      {imageAuthor && (
        <Box position="absolute" top="0" right="0" paddingRight={2}>
          <DefaultText
            color="white"
            fontSize={{
              base: "xs",
              sm: "sm",
              md: "m",
              lg: "m",
              xl: "2xl",
            }}
          >
            {imageAuthor}
          </DefaultText>
        </Box>
      )}
      {children}
    </Flex>
  );
};
