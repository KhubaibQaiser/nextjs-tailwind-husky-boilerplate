const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const config = {
  // Target must be serverless for netlify SSR/ISR
  target: "serverless",
  distDir: "out_publish",
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
  },
};

module.exports = process.env.IS_PRODUCTION
  ? withPWA({
      ...config,
      pwa: {
        dest: config.distDir,
        runtimeCaching,
      },
    })
  : config;
