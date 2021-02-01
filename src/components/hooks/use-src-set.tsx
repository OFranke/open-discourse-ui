import { useState, useEffect } from "react";

export interface Source {
  srcset: string;
  type: string;
  media?: string;
}

const SUPPORTED_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const useSrcSet = (...sources: Source[]): string | undefined => {
  const [source, setSource] = useState<string | undefined>(undefined);

  useEffect(() => {
    const element = document.createElement("picture");
    sources.forEach((s) => {
      const src = document.createElement("source");
      src.srcset = s.srcset;
      src.type = s.type;
      src.media = s.media ?? "";
      element.appendChild(src);
      return src;
    });

    const img = document.createElement("img");
    const supportedSrcSets = sources.filter((src) =>
      SUPPORTED_MIME_TYPES.includes(src.type)
    ); // This is a fallback for Safari and other browsers that don't support picture tags
    if (supportedSrcSets.length === 0)
      throw new Error("No compatible sources found");
    img.srcset = supportedSrcSets[0].srcset; // This is a fallback for Safari and other browsers that don't support picture tags
    element.appendChild(img);

    const onImgLoad = () => {
      setSource(img.currentSrc);
    };
    img.addEventListener("load", onImgLoad);

    return () => {
      img.removeEventListener("load", onImgLoad);
    };
  }, [sources]);

  return source;
};
