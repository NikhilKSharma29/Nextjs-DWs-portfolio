/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static exports
  output: 'export',
  // Add base path if your site is served from a subdirectory
  // basePath: '/portfolio',
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Image optimization settings
  images: {
    domains: ['avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
  
  // Enable React DevTools in production
  reactProductionProfiling: true,
  
  // Enable source maps in production (optional)
  productionBrowserSourceMaps: false,
  
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Add any custom webpack configurations here
    return config;
  },
  
  // Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
