import { DashboardConfig } from 'types'

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  sidebarNav: [
    {
      title: 'Panel',
      href: '/dashboard',
      icon: 'post',
    },
    {
      title: 'Analitycs',
      href: '/dashboard/analitycs',
      icon: 'barChart',
    },
    {
      title: 'Users',
      href: '/dashboard/users',
      icon: 'user',
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
}
