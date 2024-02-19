'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import useScroll from '@/hooks/use-scroll'
import { useSigninModal } from '@/hooks/use-signin-modal'

import { Button, buttonVariants } from '@/components/ui/button'

import { ModeToggle } from '@/components/layout/mode-toggle'
import { MainNav } from '@/components/layout/navigation/main/main-nav'
import { UserAccountNav } from '@/components/layout/navigation/user-account-nav'
import { Icons } from '@/components/shared/icons'

import { MainNavItem } from '@/root/types'
import { MessageSquareText } from 'lucide-react'
import { User } from 'next-auth'

interface NavBarProps {
  user: Pick<User, 'name' | 'image' | 'email'> | undefined
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

export function NavBar({
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
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}

          {!user ? (
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
            >
              Login Page
            </Link>
          ) : null}

          {user ? (
            <>
              <ul className="mr-4 flex items-center space-x-4">
                <li>
                  <Link
                    href="/feedback"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'sm' }),
                      'px-4'
                    )}
                  >
                    <MessageSquareText className="mr-2 size-4" />
                    <p>Share a feedback</p>
                  </Link>
                </li>
                <li id="changelog" className="relative">
                  <button
                    aria-label="Changelog"
                    className="absolute right-1 top-1"
                  >
                    <Icons.notification />
                  </button>
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
