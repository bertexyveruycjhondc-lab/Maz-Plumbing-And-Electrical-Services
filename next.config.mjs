/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Helps with faster rebuilds & caching behavior
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Optional: disable aggressive caching during development
  generateEtags: false,
}

export default nextConfig
