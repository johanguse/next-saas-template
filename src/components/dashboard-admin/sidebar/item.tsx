'use client'

import { useMemo, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ISidebarItem } from '@/config/dashboard-admin'

import SubMenuItem from '@/components/dashboard-admin/sidebar/sub-item'

import { ChevronDown } from 'lucide-react'

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()

  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      const isAnyChildActive = items.some((subItem) =>
        pathname.includes(subItem.path)
      )
      if (isAnyChildActive) {
        setExpanded(true)
      }
      return isAnyChildActive
    }

    return pathname === path
  }, [items, path, pathname])

  const handleToggle = () => setExpanded(!expanded)

  return (
    <>
      {items && items.length > 0 ? (
        <button
          onClick={handleToggle}
          className={`flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:bg-slate-600/25 dark:hover:text-white
            ${isActive && 'bg-indigo-500/10 dark:bg-slate-600/25 dark:text-white'}
          `}
        >
          <div className="flex items-center space-x-2">
            <Icon size={20} />
            <p className="text-sm font-semibold">{name}</p>
          </div>
          <ChevronDown size={18} />
        </button>
      ) : (
        <Link
          href={path}
          className={`flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:bg-slate-600/25 dark:hover:text-white
              ${isActive && 'bg-indigo-500/10 text-indigo-500 dark:bg-slate-600/25 dark:text-white'}
            `}
        >
          <div className="flex items-center space-x-2">
            <Icon size={20} />
            <p className="text-sm font-semibold">{name}</p>
          </div>
        </Link>
      )}
      {expanded && items && items.length > 0 && (
        <div className="ml-10 flex flex-col space-y-1">
          {items.map((item) => (
            <SubMenuItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  )
}

export default SidebarItem
