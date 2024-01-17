import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { MobileNav } from '@/components/layout/navigation/main/mobile-nav'
import { Icons } from '@/components/shared/icons'
import IconLogo from '@/components/shared/logo-icon'

interface MainNavProps {
  items?: any
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const currentPathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setShowMobileMenu(false)
  }, [])

  useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest('.mobile-nav')
      ) {
        closeMobileMenu()
      }
    }

    if (showMobileMenu) {
      document.addEventListener('click', closeMobileMenuOnClickOutside)
    }

    return () => {
      if (showMobileMenu) {
        document.removeEventListener('click', closeMobileMenuOnClickOutside)
      }
    }
  }, [showMobileMenu, closeMobileMenu])

  const isActiveLink = useCallback(
    (href: string) =>
      href === currentPathname ||
      (href !== '/' && currentPathname.startsWith(href)),
    [currentPathname]
  )

  const logo = useMemo(
    () => (
      <Image
        src="/next_saas_logo.png"
        width="40"
        height="40"
        alt={`Logo ${siteConfig.name}`}
      />
    ),
    []
  )

  const navItems = items?.map((item) => (
    <Link
      key={item.id || item.title}
      href={item.disabled ? '#' : item.href}
      className={cn(
        'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
        isActiveLink(item.href) ? 'text-foreground' : 'text-foreground/60',
        item.disabled && 'cursor-not-allowed opacity-80'
      )}
      onClick={closeMobileMenu}
    >
      {item.title}
    </Link>
  ))

  return (
    <div className="flex gap-6 md:gap-10">
      {navItems && <nav className="hidden gap-6 md:flex">{navItems}</nav>}
      <button
        className={cn(
          'flex items-center space-x-2',
          { 'md:hidden': showMobileMenu },
          { 'size-10': showMobileMenu }
        )}
        onClick={toggleMobileMenu}
      >
        {showMobileMenu ? <Icons.close /> : <IconLogo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} onClose={closeMobileMenu}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}
