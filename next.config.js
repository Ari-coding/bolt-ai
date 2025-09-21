/**
 * @type {import('next').NextConfig}
 */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);