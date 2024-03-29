'use client'

import Link from 'next/link'

import { dashboardAdminMenuitems } from '@/config/dashboard-admin'
import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import SidebarItem from '@/components/dashboard-admin/sidebar/item'
import { UserDropdown } from '@/components/dashboard-admin/sidebar/user-dropdown'
import IconLogo from '@/components/shared/logo-icon'

import { Session } from 'next-auth'

type SidebarProps = {
  user: Session['user']
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-64 bg-slate-50 p-4 shadow-lg dark:bg-slate-800/40">
      <div className="flex size-full flex-col justify-between space-y-10">
        <div>
          <Link
            href="/"
            target="_blank"
            className="sidebar-top relative mb-12 flex items-center justify-start px-3.5 py-3"
          >
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
          </Link>
          <div className="flex flex-col space-y-2">
            {dashboardAdminMenuitems.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="mt-auto border-t border-border p-6">
          <UserDropdown user={user} />
        </div>
      </div>
    </div>
  )
}
