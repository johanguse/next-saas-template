import {
  BadgeDollarSign,
  CircleUserRound,
  LayoutDashboard,
  LucideIcon,
  Settings,
  WalletCards,
} from 'lucide-react'

export interface ISidebarItem {
  name: string
  path: string
  icon: LucideIcon
  items?: ISubItem[]
}

export interface ISubItem {
  name: string
  path: string
}

export const dashboardAdminMenuitems: ISidebarItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard-admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Transactions',
    path: '/dashboard-admin/transactions',
    icon: BadgeDollarSign,
  },
  {
    name: 'Payments',
    path: '/dashboard-admin/payments',
    icon: WalletCards,
  },
  {
    name: 'Users',
    path: '/dashboard-admin/users',
    icon: CircleUserRound,
  },
  {
    name: 'Settings',
    path: '/dashboard-admin/settings',
    icon: Settings,
    items: [
      {
        name: 'General',
        path: '/dashboard-admin/settings',
      },
      {
        name: 'Security',
        path: '/dashboard-admin/settings/security',
      },
      {
        name: 'Notifications',
        path: '/dashboard-admin/settings/notifications',
      },
    ],
  },
]
