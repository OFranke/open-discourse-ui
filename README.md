This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Chakra docs

https://next.chakra-ui.com/docs/getting-started

For sitemap generation:
https://github.com/iamvishnusankar/next-sitemap

## Charts

- Nivo Docs: https://nivo.rocks/line/
- Nivo Storybook: https://nivo.rocks/storybook/?path=/story/line--custom-tooltip
- Nivo API for server side image generation: https://github.com/plouc/nivo-api
- Example how to export PNG: https://github.com/plouc/nivo/issues/698

## TODOS:

- /plenarsitzungen --> Zeigt alle Sitzungen + Verlinkung zu /plenarsitungen?session=12&electoralTerm=12
- /plenarsitungen/sitzung?session=12&electoralTerm=12 --> Zeigt komplette Sitzung, Redebeiträge farblich markiert nach Fraktion (wenn möglich), Verlinkt zu /politiker/politicianId
- /politiker --> Zeigt alle Politiker
- /poliker/politicianId --> zeigt Details über Politiker + alle Fraktionen, in denen der Politiker tätig war
