// FIX: I changed .mjs to .js
// More info: https://github.com/shadcn-ui/taxonomy/issues/100#issuecomment-1605867844

const { createContentlayerPlugin } = require('next-contentlayer')

import('./env.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  transpilePackages: ['html-to-text'],
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverComponentsExternalPackages: ['@prisma/client'],
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

module.exports = withContentlayer(nextConfig)
