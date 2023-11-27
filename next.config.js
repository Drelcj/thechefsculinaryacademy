// next.config.js

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fileSystem = false;
    }
    return config;
  },
};

module.exports = nextConfig;
