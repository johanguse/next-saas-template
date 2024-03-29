import { Icons } from '@/components/shared/icons'

import { User } from '@prisma/client'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  subMenu?: NavItem[]
}

export type MainNavItem = NavItem

export type MultiLevelNav = {
  items: MainNavItem[]
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

type Icons = {
  twitter: string
  github: string
  linkedin: string
  youtube: string
  instagram: string
  facebook: string
  tiktok: string
}

type Target = '_blank' | '_self'

type SocialLink = {
  label: string
  icon: keyof typeof Icons
  href: string
}

type FooterLink = {
  href: string
  name: string
  target?: Record<Target>
}

export type SiteConfig = {
  address: string
  name: string
  description: string
  shortDescription: string
  url: string
  ogImage: string
  mailSupport: string
  social: {
    links: Record<keyof Icons, SocialLink>
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type BlocksConfig = {
  sidebarNavBlocks: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
  multiLevelNav: MainNavItem[]
  footer: {
    links: FooterLink[]
  }
  postsPerPage: number
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SideNavItem = {
  title: string
  path: string
  icon?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
}

export type SideNavItemGroup = {
  title: string
  menuList: SideNavItem[]
}

export type SubscriptionPlan = {
  title: string
  description: string
  benefits: string[]
  limitations: string[]
  prices: {
    monthly: number
    yearly: number
  }
  stripeIds: {
    monthly: string | null
    yearly: string | null
  }
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId' | 'stripePriceId'> & {
    stripeCurrentPeriodEnd: number
    isPaid: boolean
    interval: 'month' | 'year' | null
    isCanceled?: boolean
  }
