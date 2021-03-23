import { chakra } from "@chakra-ui/react";

interface ImageProps {
  imagePath: string;
  imageAlt: string;
  sizes: number[];
}
export const Image: React.FC<ImageProps> = ({ imagePath, imageAlt, sizes }) => {
  const sizesParams = sizes.map((size) => `sizes[]=${size}`);
  const concatenatedSizes = sizesParams.join("&");
  console.log(
    "\x1b[33m%s\x1b[0m",
    "%c >> concatenatedSizes",
    concatenatedSizes
  );
  const multipleSizesWebp = require(`../../public/images${imagePath}?resize&sizes[]=320&sizes[]=640&format=webp`);
  const multipleSizes = require(`../../public/images${imagePath}?resize&sizes[]=320&sizes[]=640&format=jpg`);
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
