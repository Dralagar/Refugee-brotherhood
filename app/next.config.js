/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
