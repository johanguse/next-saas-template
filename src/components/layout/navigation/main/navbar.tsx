'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import useScroll from '@/hooks/use-scroll'
import { useSigninModal } from '@/hooks/use-signin-modal'

import { Button, buttonVariants } from '@/components/ui/button'

import { MainNav } from '@/components/layout/navigation/main/main-nav'
import { UserAccountNav } from '@/components/layout/navigation/user-account-nav'
import ButtonShareFeedback from '@/components/shared/button-share-feedback'
import ChangelogButton from '@/components/shared/changelog-button'

import { MainNavItem } from '@/root/types'
import { User } from 'next-auth'

interface NavBarProps {
  user: Pick<User, 'name' | 'image' | 'email'> | undefined
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

const LoginLink = () => (
  <Link
    href="/login"
    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
  >
    Login Page
  </Link>
)

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
      className={cn(
        'sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all',
        { 'border-b': scroll ? scrolled : true },
        { 'bg-background/0': scroll && !scrolled }
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}

          {!user && (
            <>
              <ChangelogButton />
              <LoginLink />
            </>
          )}

          {user && (
            <>
              <ul className="mr-4 flex items-center space-x-4">
                <li>
                  <ButtonShareFeedback />
                </li>
              </ul>
              <UserAccountNav user={user} />
            </>
          )}

          {!user && (
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
