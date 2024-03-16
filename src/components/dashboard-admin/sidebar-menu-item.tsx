'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { useSideBarToggle } from '@/hooks/use-sidebar-toggle'

import { SideNavItem } from '@/root/types'
import { ChevronRight } from 'lucide-react'

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
  const { toggleCollapse } = useSideBarToggle()

  const pathname = usePathname()

  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  const inactiveLink = cn(
    'text-sidebar-foreground flex h-full min-h-[40px] cursor-pointer items-center rounded-md transition duration-200'
  )

  const activeLink = cn('active bg-sidebar-muted text-red cursor-pointer')

  const navMenuDropdownItem = 'text-red transition duration-200 rounded-md'

  const dropdownMenuHeaderLink = cn(inactiveLink, {
    ['rounded-b-none']: subMenuOpen,
  })
  return (
    <>
      {item.submenu ? (
        <div className="min-w-[18px]">
          <a
            className={`${dropdownMenuHeaderLink} ${
              pathname.includes(item.path) ? activeLink : ''
            }`}
            onClick={toggleSubMenu}
          >
            {item.icon}
            {!toggleCollapse && (
              <>
                <span className="ml-3 text-base font-semibold leading-6">
                  {item.title}
                </span>
                <ChevronRight
                  className={`${
                    subMenuOpen ? 'rotate-90' : ''
                  } ml-auto stroke-2 text-xs`}
                />
              </>
            )}
          </a>
          {subMenuOpen && !toggleCollapse && (
            <div className="bg-sidebar-muted border-l-4">
              <div className="grid gap-y-2 px-10 py-3 leading-5">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      className={`${navMenuDropdownItem} ${
                        subItem.path === pathname
                          ? 'text-white '
                          : 'text-sidebar-foreground'
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`${inactiveLink} ${
            item.path === pathname ? activeLink : ''
          }`}
        >
          {item.icon}
          {!toggleCollapse && (
            <span className="ml-3 font-semibold leading-6">{item.title}</span>
          )}
        </Link>
      )}
    </>
  )
}
