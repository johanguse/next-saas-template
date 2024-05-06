import * as React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MainNavItem } from 'types'

import { cn } from '@/lib/utils'

import { useLockBody } from '@/hooks/use-lock-body'

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
  onClose: () => void
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()
  const currentPathname = usePathname()

  const isActiveLink = (href: string) =>
    href === currentPathname ||
    (href !== '/' && currentPathname.startsWith(href))

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max space-y-2 text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80',
                isActiveLink(item.href)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
