import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { siteConfig } from "../site-config";
import { MetaTag } from "next-seo/lib/types";
import { getDeploymentUrl } from "../utils";

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  canonicalRoute: string;
}
export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonicalRoute,
  additionalMetaTags,
  ...nextSeoProps
}) => {
  const deploymentUrl = getDeploymentUrl();

  const canonicalUrl = new URL(canonicalRoute, deploymentUrl).href;
  const canonicalUrlWithoutTrailingSlash = canonicalUrl.replace(/\/$/, "");
  const tags: MetaTag[] = [
    { name: "twitter:site", content: "@OpenDiscourseDE" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { property: "og:type", content: "website" },
    {
      property: "og:site_name",
      content: deploymentUrl,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrlWithoutTrailingSlash },
    { property: "og:locale", content: "de_DE" },
    ...(additionalMetaTags ? [...additionalMetaTags] : []),
  ];

  return (
    <NextSeo
      title={title}
      description={description}
      titleTemplate={siteConfig.seo.titleTemplate}
      canonical={canonicalUrlWithoutTrailingSlash}
      additionalMetaTags={tags}
      {...nextSeoProps}
    />
  );
};

export default SEO;
