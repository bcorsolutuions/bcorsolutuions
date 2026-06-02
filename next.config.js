/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  webpack: (config) => {
    // Disable webpack cache to prevent file system errors
    config.cache = false;
    return config;
  }
};

module.exports = nextConfig;