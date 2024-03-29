import * as React from 'react'

import Link from 'next/link'

import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'

import { getCurrentUser } from '@/lib/session'
import { cn } from '@/lib/utils'

import { ModeToggle } from '@/components/layout/mode-toggle'
import ChangelogButton from '@/components/shared/changelog-button'
import { Icons } from '@/components/shared/icons'
import IconLogo from '@/components/shared/logo-icon'

import { SocialLink } from '@/root/types'

export async function SiteFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const user = await getCurrentUser()
  const footerSocialLinks: SocialLink[] = Object.entries(
    siteConfig.social?.links ?? {}
  ).map(([key, value]) => ({
    ...value,
    icon: key as keyof typeof Icons,
  }))
  const footerMenuLinks = marketingConfig.footer.links

  return (
    <footer
      className={
        cn(className) +
        ' mx-auto w-full bg-white px-4 pb-6 pt-16 text-gray-500 dark:bg-black md:px-8'
      }
    >
      <div className="container">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <div className="mx-auto mb-8 flex flex-col items-center">
            <IconLogo className="mb-2 size-16" />
            <span className="mb-6 hidden font-urban text-xl font-bold text-black dark:text-white sm:inline-block">
              {siteConfig.name}
            </span>
            <ul className="flex items-center space-x-4">
              {footerSocialLinks.map((link, id) => (
                <li className="mx-2 inline-block" key={id || link.href}>
                  <Link href={link.href} target="_blank">
                    <span className="sr-only">{link.label}</span>
                    {React.createElement(Icons[link.icon || 'plus'], {
                      height: 22,
                      width: 22,
                      className: 'text-gray-600 dark:text-gray-400',
                      'aria-hidden': 'true',
                    })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <ul className="mt-8 items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerMenuLinks.map((item, id) => (
            <li className=" hover:text-gray-800" key={id}>
              <a key={id} href={item.href} target={item.target ? '_blank' : ''}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            All rights reserved. © {new Date().getFullYear()} {siteConfig.name}
            .
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              {user && (
                <>
                  <li>
                    <Link href="/dashboard">
                      <span className="sr-only">Dashboard</span>
                      {React.createElement(Icons.user, {
                        height: 24,
                        width: 24,
                        className: 'text-gray-600 dark:text-gray-400',
                        'aria-hidden': 'true',
                      })}
                    </Link>
                  </li>
                  <li>
                    <ChangelogButton />
                  </li>
                </>
              )}
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
