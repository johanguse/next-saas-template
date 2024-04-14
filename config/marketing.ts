import { MarketingConfig } from 'types'

import { docsConfig } from '@/config/docs'

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Pre Sale',
      href: '/pre-sale',
    },
    {
      title: 'Blocks',
      href: '/blocks',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Documentation',
      href: docsConfig.docUrl.href,
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  multiLevelNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Pre Sale',
      href: '/pre-sale',
    },
    {
      title: 'Blocks',
      href: '/blocks',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Documentation',
      href: docsConfig.docUrl.href,
      subMenu: [
        {
          title: 'Introduction',
          href: docsConfig.docUrl.href + '/docs',
        },
        {
          title: 'Contentlayer',
          href: docsConfig.docUrl.href + '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Components',
          href: docsConfig.docUrl.href + '/docs/documentation/components',
        },
        {
          title: 'Code Blocks',
          href: docsConfig.docUrl.href + '/docs/documentation/code-blocks',
        },
      ],
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  footer: {
    links: [
      {
        href: 'https://bit.ly/48LTNin',
        name: 'Public Roadmap',
        target: '_blank',
      },
      {
        href: '/legal/privacy-policy',
        name: 'Privacy Policy',
      },
      {
        href: '/legal/cookies-policy',
        name: 'Cookies Policy',
      },
      {
        href: '/legal/terms-of-service',
        name: 'Terms of Service',
      },
    ],
  },
  postsPerPage: 6,
}
