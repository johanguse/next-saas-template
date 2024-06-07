import {
  Bookmark,
  LayoutGrid,
  Settings,
  SquarePen,
  Tag,
  Users,
} from 'lucide-react'

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: any
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export const dashboardPrefixURL = '/dashboard-admin'

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: dashboardPrefixURL,
          label: 'Dashboard',
          active: pathname.includes(dashboardPrefixURL),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Posts',
          active: pathname.includes(dashboardPrefixURL + '/posts'),
          icon: SquarePen,
          submenus: [
            {
              href: dashboardPrefixURL + '/posts',
              label: 'All Posts',
              active: pathname === '/posts',
            },
            {
              href: dashboardPrefixURL + '/posts/new',
              label: 'New Post',
              active: pathname === dashboardPrefixURL + '/posts/new',
            },
          ],
        },
        {
          href: dashboardPrefixURL + '/categories',
          label: 'Categories',
          active: pathname.includes(dashboardPrefixURL + '/categories'),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: dashboardPrefixURL + '/tags',
          label: 'Tags',
          active: pathname.includes(dashboardPrefixURL + '/tags'),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: dashboardPrefixURL + '/users',
          label: 'Users',
          active: pathname.includes(dashboardPrefixURL + '/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: dashboardPrefixURL + '/account',
          label: 'Account',
          active: pathname.includes(dashboardPrefixURL + '/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}
