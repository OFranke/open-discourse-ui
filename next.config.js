const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
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
