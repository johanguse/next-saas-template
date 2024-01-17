'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle'
import { SIDENAV_ITEMS } from '@/components/dashboard-admin/menu_constants'
import { SideBarLogo } from '@/components/dashboard-admin/sidebar-logo'
import SideBarMenuGroup from '@/components/dashboard-admin/sidebar-menu-group'

export const SideBar = () => {
  const [mounted, setMounted] = useState(false)
  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle()
  const sidebarToggle = () => {
    invokeToggleCollapse()
  }
  const chevronLeftIconClass = cn('icon-class', {
    'rotate-180': toggleCollapse,
  })

  const asideStyle = cn(
    'sidebar bg-sidebar fixed z-[99999] h-full overflow-auto shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out',
    {
      ['w-[16rem]']: !toggleCollapse,
      ['sm:w-[4.2rem] sm:left-0 left-[-100%]']: toggleCollapse,
    }
  )

  useEffect(() => setMounted(true), [])

  return (
    <aside className={asideStyle}>
      <div className="sidebar-top relative flex items-center justify-start px-3.5 py-3">
        {mounted && <SideBarLogo />}
        <h3
          className={cn(
            'text-sidebar-foreground min-w-max pl-2 text-2xl font-bold',
            { hidden: toggleCollapse }
          )}
        >
          <span className="hidden font-urban text-base font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </h3>
      </div>
      <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
        <div
          className={cn('relative flex w-full flex-col gap-2 px-4', {
            'items-center': toggleCollapse,
          })}
        >
          {SIDENAV_ITEMS.map((item, idx) => {
            return <SideBarMenuGroup key={idx} menuGroup={item} />
          })}
        </div>
      </nav>
      <button
        onClick={sidebarToggle}
        className={cn(
          'shrink-btn bg-sidebar-muted text-sidebar-muted-foreground absolute bottom-2 right-4 z-50 order-2 float-right flex size-[30px] items-center justify-center rounded-md transition duration-300 ease-in-out hover:bg-foreground  hover:text-background sm:order-1',
          chevronLeftIconClass
        )}
      >
        <ChevronLeft />
        <span className="sr-only">Collapse sidebar</span>
      </button>
    </aside>
  )
}
