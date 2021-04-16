import { Flex, FlexProps, Box } from "@chakra-ui/react";
import { useSrcSet } from "./hooks/use-src-set";
import DefaultText from "@bit/limebit.limebit-ui.default-text";

export interface BackgroundImageProps extends FlexProps {
  relativePathFromImageDir: string;
  imageAuthor?: string;
  backgroundPosition?: string;
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
  relativePathFromImageDir,
  height,
  width,
  imageAuthor,
  backgroundPosition,
  ...flexProps
}) => {
  const multipleSizesWebp = require(`../../public/images${relativePathFromImageDir}?resize&sizes[]=480&sizes[]=768&sizes[]=1024&sizes[]=1440&sizes[]=1920&sizes[]=2560&format=webp`);
  const multipleSizes = require(`../../public/images${relativePathFromImageDir}?resize&sizes[]=480&sizes[]=768&sizes[]=1024&sizes[]=1440&sizes[]=1920&sizes[]=2560&format=jpg`);
  const backgroundUrl = useSrcSet(
    {
      srcset: multipleSizesWebp.srcSet,
      type: "image/webp",
    },
    {
      srcset: multipleSizes.srcSet,
      type: "image/jpg",
    }
  );

  return (
    <Flex
      position={"relative"}
      width={width || "100%"}
      backgroundPosition={backgroundPosition || "center"}
      backgroundSize="cover"
      height={height || backgroundImageHeight}
      backgroundImage={backgroundUrl ? `url(${backgroundUrl})` : undefined}
      {...flexProps}
    >
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
