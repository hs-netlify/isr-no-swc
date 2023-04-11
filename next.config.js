/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "test";
  },
};

module.exports = nextConfig;
