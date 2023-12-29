import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { NavDesktop } from '@/components/layout/navigation/animation/nav-animation-desktop'
import { NavMobile } from '@/components/layout/navigation/animation/nav-animation-mobile'

type MainNavProps = {
  className?: string
}

export const MainNavAnimation: React.FC<MainNavProps> = ({ className }) => {
  const MainNavClasses = cn(
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'bg-neutral-950',
    'border-b',
    'border-neutral-700',
    className
  )

  return (
    <div className={MainNavClasses}>
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <Link href="/" className="items-center space-x-2 sm:flex">
          <Image
            src="/next_saas_logo.png"
            width="40"
            height="40"
            alt={`Logo ${siteConfig.name}`}
          />
          <span className="hidden font-urban text-xl font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  )
}
