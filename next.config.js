/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable features that use too much memory
  compress: false, // DISABLE compression temporarily
  swcMinify: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.refugeebrotherhood.org',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Environment variables
  env: {
    SITE_URL: 'https://www.refugeebrotherhood.org',
    SITE_NAME: 'Refugee Brotherhood',
  },

  // Webpack configuration for memory optimization
  webpack: (config, { dev, isServer }) => {
    // Disable cache to save memory
    config.cache = false;
    
    // Reduce memory usage
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxSize: 200000, // 200KB chunks
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    
    return config;
  },

  // Disable some memory-intensive features
  experimental: {
    optimizeCss: false,
    webpackMemoryOptimizations: false,
  },

  // Output configuration
  output: 'standalone',

  // Trailing slash configuration
  trailingSlash: false,
};

module.exports = nextConfig;