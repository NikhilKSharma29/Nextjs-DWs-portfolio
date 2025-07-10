/** @type {import('next').NextConfig} */
const nextConfig = {
  // Target must be set to serverless for Netlify
  target: 'serverless',
  reactStrictMode: true,
  // Enable static exports for Netlify
  output: 'export',
  // Add base path if your site is served from a subdirectory
  // basePath: '/portfolio',
  // Add trailing slash for Netlify compatibility
  trailingSlash: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Add any other domains you use for images
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports for SSG (if you're using static site generation)
  output: 'standalone',
  // Enable React DevTools in production
  reactProductionProfiling: true,
  // Enable source maps in production (optional)
  productionBrowserSourceMaps: false,
  // Configure webpack (optional)
  webpack: (config, { isServer }) => {
    // Add any custom webpack configurations here
    return config;
  },
  // Environment variables that should be available at build time
  env: {
    // Add any environment variables that should be available at build time
  },
  // Configure headers (optional)
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
