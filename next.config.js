/**
 * @type {import('next').NextConfig}
 */
const withNextIntl = require("next-intl/plugin")("./lib/i18n.ts");

const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist'
};

module.exports = withNextIntl(nextConfig);
