// next.config.js
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], this would be default
    // removed 3840 to improve load time on high resolution displays
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withPlugins([], nextConfig);
