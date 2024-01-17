import { SideNavItemGroup } from '@/root/types'
import {
  Cog,
  HelpCircle,
  KanbanSquare,
  List,
  Mail,
  Warehouse,
} from 'lucide-react'

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: 'Dashboards',
    menuList: [
      {
        title: 'Dashboard',
        path: '/dashboard-admin',
        icon: <Warehouse />,
      },
    ],
  },
  {
    title: 'Manage',
    menuList: [
      {
        title: 'Products',
        path: '/products',
        icon: <KanbanSquare />,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/products' },
          { title: 'New', path: '/products/new' },
        ],
      },
      {
        title: 'Orders',
        path: '/orders',
        icon: <List />,
      },
      {
        title: 'Feedbacks',
        path: '/feedbacks',
        icon: <Mail />,
      },
    ],
  },
  {
    title: 'Others',
    menuList: [
      {
        title: 'Account',
        path: '/account',
        icon: <Cog />,
      },
      {
        title: 'Help',
        path: '/help',
        icon: <HelpCircle />,
      },
    ],
  },
]
