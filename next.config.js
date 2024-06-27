const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/**",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
