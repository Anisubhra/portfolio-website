/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ['fonts.gstatic.com']
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
