const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const path = require("path");
const { withPlugins, extend } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const envConfig = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    HOST_URL: isDev
      ? "http://localhost:3000/"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  };

  const experimental = {
    optimizeFonts: true,
  };
  return {
    env,
    // experimental,
  };
};

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // {
          //   // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self';font-src fonts.gstatic.com;style-src 'self' fonts.googleapis.com",
          // },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};
module.exports = withPlugins(
  [
    [
      optimizedImages({
        imagesFolder: "images",
        optimizeImagesInDev: true,
        optimizeImages: true,
        mozjpeg: {
          quality: 80,
        },
        webp: {
          preset: "default",
          quality: 75,
        },
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
        webpack: (
          config,
          { buildId, dev, isServer, defaultLoaders, webpack }
        ) => {
          config.resolve.alias["@public"] = path.resolve(__dirname, "public");
          config.plugins.push(new DuplicatePackageCheckerPlugin());
          // e.g. resolve duplicate dependencies to the latest version
          config.resolve.alias["@emotion"] = path.resolve(
            __dirname,
            "node_modules",
            "@emotion"
          );
          config.resolve.alias["@chakra-ui/react"] = path.resolve(
            __dirname,
            "node_modules",
            "@chakra-ui/react"
          );
          return config;
        },
      }),
      {
        /* config for next-optimized-images */
      },
    ],
  ],
  nextConfig
);
