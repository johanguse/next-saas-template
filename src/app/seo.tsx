import { Metadata } from 'next'

import { siteConfig } from '@/config/site'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      url: './',
      siteName: siteConfig.name,
      images: image ? [image] : [siteConfig.ogImage],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteConfig.ogImage],
    },
    ...rest,
  }
}
