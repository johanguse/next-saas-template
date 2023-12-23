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
  social: {
    links: [
      {
        label: 'Twitter',
        icon: 'twitter',
        href: 'https://twitter.com/next_saaS',
      },
      {
        label: 'Github',
        icon: 'gitHub',
        href: 'https://github.com/johanguse/next-saas-template',
      },
      {
        label: 'Facebook',
        icon: 'facebook',
        href: 'https://github.com/johanguse/next-saas-template/issues',
      },
      {
        label: 'Instagram',
        icon: 'instagram',
        href: 'https://github.com/johanguse/next-saas-template/issues',
      },
      {
        label: 'Tiktok',
        icon: 'tiktok',
        href: 'https://github.com/johanguse/next-saas-template/issues',
      },
      {
        label: 'YouTube',
        icon: 'youtube',
        href: 'https://github.com/johanguse/next-saas-template/issues',
      },
      {
        label: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://github.com/johanguse/next-saas-template/issues',
      },
      {
        label: 'Discord',
        icon: 'discord',
        href: 'https://github.com/johanguse/next-saas-template/issues',
      },
    ],
  },
  mailSupport: 'nextsaastemplate@gmail.com',
  address: '123 Code Street, Suite 404, Devtown, CA 98765',
}
