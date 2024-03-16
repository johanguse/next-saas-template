'use client'

import { dashboardAdminMenu } from '@/config/dashboard-admin'
import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/dashboard-admin/sidebar'
import SideBarMenuGroup from '@/components/dashboard-admin/sidebar-menu-group'
import { UserDropdown } from '@/components/dashboard-admin/user-dropdown'
import ButtonShareFeedback from '@/components/shared/button-share-feedback'

import IconLogo from '../shared/logo-icon'
import { Session } from 'next-auth'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <div className="sidebar-top relative flex items-center justify-start px-3.5 py-3">
          <IconLogo />
          <h3
            className={cn(
              'text-sidebar-foreground min-w-max pl-2 text-2xl font-bold'
            )}
          >
            <span className="hidden font-urban text-base font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </h3>
        </div>
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex grow flex-col">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
              <div className={cn('relative flex w-full flex-col gap-2 px-4')}>
                {dashboardAdminMenu.map((item, idx) => {
                  return <SideBarMenuGroup key={idx} menuGroup={item} />
                })}
              </div>
            </nav>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <ButtonShareFeedback />
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/" className="mt-12">
              Go to site
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
