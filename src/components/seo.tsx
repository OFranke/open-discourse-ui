import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { siteConfig } from "../site-config";
import path from "path";

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  canonicalRoute: string;
}
export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonicalRoute,
}) => {
  if (!process.env.NEXT_PUBLIC_VERCEL_URL) {
    throw new Error("environment variable NEXT_PUBLIC_VERCEL_URL not found.");
  }

  return (
    <NextSeo
      title={title}
      description={description}
      titleTemplate={siteConfig.seo.titleTemplate}
      canonical={
        new URL(canonicalRoute, process.env.NEXT_PUBLIC_VERCEL_URL).href
      }
    />
  );
};

export default SEO;
