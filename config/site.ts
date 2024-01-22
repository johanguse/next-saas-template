import { SiteConfig } from 'types'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const siteConfig: SiteConfig = {
  name: 'Next SaaS Template',
  description:
    'Empowering your SaaS startup journey with a meticulously crafted Next.js boilerplate and starter kit for fully-functional websites and apps.',
  url: defaultUrl,
  mailSupport: 'nextsaastemplate@gmail.com',
  address: '123 Code Street, Suite 404, Devtown, CA 98765',
  ogImage: `${defaultUrl}/og.jpg`,
  social: {
    links: {
      twitter: {
        label: 'Twitter',
        icon: 'twitter',
        href: 'https://twitter.com/next_saaS',
      },
      github: {
        label: 'GitHub',
        icon: 'github',
        href: 'https://github.com/johanguse/next-saas-template',
      },
      linkedin: {
        label: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://github.com/johanguse/next-saas-template',
      },
      youtube: {
        label: 'YouTube',
        icon: 'youtube',
        href: 'https://github.com/johanguse/next-saas-template',
      },
      instagram: {
        label: 'Instagram',
        icon: 'instagram',
        href: 'https://github.com/johanguse/next-saas-template',
      },
      facebook: {
        label: 'Facebook',
        icon: 'facebook',
        href: 'https://github.com/johanguse/next-saas-template',
      },
      tiktok: {
        label: 'Tiktok',
        icon: 'tiktok',
        href: 'https://github.com/johanguse/next-saas-template',
      },
    },
  },

  footer: {
    links: [
      {
        href: 'https://bit.ly/48LTNin',
        name: 'Public Roadmap',
        target: '_blank',
      },
      {
        href: '/privacy-policy',
        name: 'Privacy Policy',
      },
      {
        href: '/cookies-policy',
        name: 'Cookies Policy',
      },
    ],
  },
}
