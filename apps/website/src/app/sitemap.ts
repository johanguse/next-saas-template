import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

import { marketingConfig } from '@/config/marketing'
import { absoluteUrl, formatDateToISO } from '@/lib/utils'

const baseUrl = absoluteUrl('')

const todayDateISO = formatDateToISO(new Date())

const routes: MetadataRoute.Sitemap = [
  ...marketingConfig.mainNav.map((link) => link.href),
].map((route) => ({
  url: `${baseUrl}${route}`,
  lastModified: todayDateISO,
}))

const postsSitemap: MetadataRoute.Sitemap = allPosts.map((post) => ({
  url: `${baseUrl}/${post._raw.flattenedPath}`,
  lastModified: formatDateToISO(new Date(post.date)),
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...postsSitemap]
}
