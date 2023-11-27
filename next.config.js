// next.config.js

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },

  // Add other configurations here...
  
  experimental: {
    webpackBuildWorker: true,
  },
};

module.exports = nextConfig;
