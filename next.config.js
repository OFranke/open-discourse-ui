const path = require("path");
const { withPlugins } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const envConfig = () => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = process.env.VERCEL_ENV === "development";
  const isPreview = process.env.VERCEL_ENV === "preview";
  const isProd = process.env.VERCEL_ENV === "production";

  console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isPreview}`);

  const env = {
    HOST_URL: isDev
      ? "http://localhost:3000/"
      : isPreview
      ? `https://${process.env.VERCEL_GIT_REPO_SLUG}-git-${process.env.VERCEL_GIT_COMMIT_REF}.ofranke.vercel.app`
      : isProduction
      ? `https://opendiscourse.de`
      : undefined,
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
          quality: 80,
        },
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
        webpack: (
          config,
          { buildId, dev, isServer, defaultLoaders, webpack }
        ) => {
          config.module.rules.push({
            test: /react-spring/,
            sideEffects: true,
          });
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
    envConfig,
  ],
  nextConfig
);
