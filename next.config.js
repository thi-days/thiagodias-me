/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  redirects: async () => [
    {
      source: "/resume",
      destination: `/resume/en-US`,
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
