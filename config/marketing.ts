import { MarketingConfig } from 'types'

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
      href: '/docs',
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
      href: '/docs',
      subMenu: [
        {
          title: 'Introduction',
          href: '/docs',
        },
        {
          title: 'Contentlayer',
          href: '/docs/in-progress',
          disabled: true,
        },
        {
          title: 'Components',
          href: '/docs/documentation/components',
        },
        {
          title: 'Code Blocks',
          href: '/docs/documentation/code-blocks',
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
