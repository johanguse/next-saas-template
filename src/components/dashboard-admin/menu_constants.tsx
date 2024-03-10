import { SideNavItemGroup } from '@/root/types'
import {
  CogIcon,
  HelpCircleIcon,
  KanbanSquareIcon,
  ListIcon,
  MailIcon,
  UsersIcon,
  WarehouseIcon,
} from 'lucide-react'

const WarehouseIconElement = <WarehouseIcon />
const UsersIconElement = <UsersIcon />
const KanbanSquareIconElement = <KanbanSquareIcon />
const ListIconElement = <ListIcon />
const MailIconElement = <MailIcon />
const CogIconElement = <CogIcon />
const HelpCircleIconElement = <HelpCircleIcon />

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: 'Dashboards',
    menuList: [
      {
        title: 'Dashboard',
        path: '/dashboard-admin',
        icon: WarehouseIconElement,
      },
    ],
  },
  {
    title: 'Users',
    menuList: [
      {
        title: 'All Users',
        path: '/dashboard-admin/users',
        icon: UsersIconElement,
      },
    ],
  },
  {
    title: 'Manage',
    menuList: [
      {
        title: 'Products',
        path: '/products',
        icon: KanbanSquareIconElement,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/products' },
          { title: 'New', path: '/products/new' },
        ],
      },
      {
        title: 'Orders',
        path: '/orders',
        icon: ListIconElement,
      },
      {
        title: 'Feedbacks',
        path: '/feedbacks',
        icon: MailIconElement,
      },
    ],
  },
  {
    title: 'Others',
    menuList: [
      {
        title: 'Account',
        path: '/account',
        icon: CogIconElement,
      },
      {
        title: 'Help',
        path: '/help',
        icon: HelpCircleIconElement,
      },
    ],
  },
]
