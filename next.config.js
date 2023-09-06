/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/inspectlet.js',
        destination: '/api/inspectlet',
      },
    ];
  },
};

module.exports = nextConfig;
