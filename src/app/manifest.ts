import { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name:
      'Empowering your SaaS startup journey with a meticulously crafted Next.js boilerplate',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#c423e7',
    theme_color: '#fff',
    icons: [
      {
        src: 'favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'favicons/android-icon-192x192.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: 'favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: 'favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: 'favicons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'favicons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'favicons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
