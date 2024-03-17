'use client'

import React from 'react'

import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import useScroll from '@/hooks/use-scroll'
import { useSigninModal } from '@/hooks/use-signin-modal'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { ModeToggle } from '@/components/layout/mode-toggle'
import { UserAccountNav } from '@/components/layout/navigation/user-account-nav'
import ButtonShareFeedback from '@/components/shared/button-share-feedback'
import ChangelogButton from '@/components/shared/changelog-button'
import IconLogo from '@/components/shared/logo-icon'

import { MainNavItem } from '@/root/types'
import type { Session } from 'next-auth'

const LoginLink = () => (
  <Link
    href="/login"
    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
  >
    Login Page
  </Link>
)

interface NavBarProps {
  user: Session['user']
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

export function MultiLevelNav({
  user,
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50)
  const signInModal = useSigninModal()

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? 'border-b' : 'bg-background/0') : 'border-b'
      }`}
    >
      <div className="container flex h-16 items-center justify-start py-4">
        <Link href="/" className="mr-10 hidden items-center space-x-2 md:flex">
          <IconLogo />
          <span className="hidden font-urban text-xl font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        {items?.length ? (
          <NavigationMenu className="mr-10">
            <NavigationMenuList>
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  {item.subMenu && item.subMenu.length > 0 ? (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          {item.subMenu.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              href={subItem.href}
                              title={subItem.title}
                            >
                              {subItem.title}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={item.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-3">
          {rightElements}

          {!user ? <LoginLink /> : null}

          {user ? (
            <>
              <ul className="mr-4 flex items-center space-x-4">
                <li>
                  <ButtonShareFeedback />
                </li>
                <li>
                  <ChangelogButton />
                </li>
                <li>
                  <ModeToggle />
                </li>
              </ul>
              <UserAccountNav user={user} />
            </>
          ) : (
            <Button
              className="px-3"
              variant="default"
              size="sm"
              onClick={signInModal.onOpen}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
