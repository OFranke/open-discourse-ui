import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    const routes = [
      "",
      "daten-und-methodik",
      "diskursanalyse",
      "ueber-uns",
      "volltextsuche",
    ];
    const pages = `
    ${routes
      .map((route) => {
        return `
          <url>
            <loc>${
              new URL(
                `${encodeURIComponent(route)}`,
                `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
              ).href
            }</loc>
            <lastmod>2022-07-20T10:00:00+01:00</lastmod>
            <changefreq>weekly</changefreq>
          </url>
        `;
      })
      .join("")}
`;

    const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages}
    </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(content);
    res.end();
  }
  return {
    props: {},
  };
};

const Sitemap: React.FC = () => null;

export default Sitemap;
