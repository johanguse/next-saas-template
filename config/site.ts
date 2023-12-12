import { env } from '@/root/env.mjs'

import { SiteConfig } from 'types'

const site_url = env.NEXT_PUBLIC_APP_URL

export const siteConfig: SiteConfig = {
  name: 'Next SaaS Template',
  description:
    'Empowering your SaaS startup journey with a meticulously crafted Next.js boilerplate and starter kit for fully-functional websites and apps.',
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/johanguse',
    github: 'https://github.com/johanguse/next-saas-template',
  },
  mailSupport: 'nextsaastemplate@gmail.com',
  address: '123 Code Street, Suite 404, Devtown, CA 98765',
}
