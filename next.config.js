const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const { withPlugins, extend } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const envConfig = (phase) => {
  // production value per environment is configured in vercel, see https://vercel.com/docs/platform/environment-variables
  const env = {};
  const i18n = {};
  return {
    env,
    i18n,
  };
};

module.exports = extend(envConfig).withPlugins([
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
    }),
    {
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);
