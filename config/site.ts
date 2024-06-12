import { SiteConfig } from 'types'

import { absoluteUrl } from '@/lib/utils'

const defaultUrl = absoluteUrl('')

export const siteConfig: SiteConfig = {
  name: 'Next SaaS Template - DEMO',
  description:
    'Empowering your SaaS startup journey with a meticulously crafted Next.js boilerplate and starter kit for fully-functional websites and apps.',
  shortDescription:
    'Empowering your SaaS startup journey with a meticulously crafted Next.js boilerplate',
  url: defaultUrl,
  mailSupport: 'nextsaastemplate@gmail.com',
  address: '123 Code Street, Suite 404, Devtown, CA 98765',
  ogImage: `${defaultUrl}/og.jpg`,
  social: {
    links: {
      twitter: {
        label: 'Twitter',
        icon: 'twitter',
        href: 'https://twitter.com/SaasTemplate',
      },
      github: {
        label: 'GitHub',
        icon: 'github',
        href: 'https://twitter.com/SaasTemplate',
      },
      linkedin: {
        label: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://twitter.com/SaasTemplate',
      },
      youtube: {
        label: 'YouTube',
        icon: 'youtube',
        href: 'https://twitter.com/SaasTemplate',
      },
      instagram: {
        label: 'Instagram',
        icon: 'instagram',
        href: 'https://twitter.com/SaasTemplate',
      },
      facebook: {
        label: 'Facebook',
        icon: 'facebook',
        href: 'https://twitter.com/SaasTemplate',
      },
      tiktok: {
        label: 'Tiktok',
        icon: 'tiktok',
        href: 'https://twitter.com/SaasTemplate',
      },
    },
  },
}
