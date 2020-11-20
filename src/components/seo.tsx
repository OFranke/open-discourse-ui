import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { siteConfig } from "../site-config";

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
}
export const SEO: React.FC<SeoProps> = ({ title, description }) => (
  <NextSeo
    title={title}
    description={description}
    titleTemplate={siteConfig.seo.titleTemplate}
  />
);

export default SEO;
