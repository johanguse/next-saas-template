'use client'

import { cn } from '@/lib/utils'

import { useCurrentUser } from '@/hooks/use-current-user'
import useScroll from '@/hooks/use-scroll'
import { useSigninModal } from '@/hooks/use-signin-modal'

import { Button } from '@/components/ui/button'

import { MainNav } from '@/components/layout/navigation/shadcn/main-nav'
import { UserAccountNav } from '@/components/layout/navigation/user-account-nav'
import AuthLink from '@/components/shared/auth-link'
import ButtonShareFeedback from '@/components/shared/button-share-feedback'
import ChangelogButton from '@/components/shared/changelog-button'

import MobileSheetMenu from '../shadcn/mobile-sheet-menu'
import { MainNavItem } from '@/root/types'

interface NavBarProps {
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50)
  const signInModal = useSigninModal()
  const user = useCurrentUser()

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
              <AuthLink
                variant="outline"
                href="/login"
                text="Login Page"
                className="hidden md:flex"
              />
            </>
          )}

          {user && (
            <>
              <ul className="mr-4 hidden items-center space-x-4 md:flex">
                <li>
                  <ButtonShareFeedback />
                </li>
              </ul>
              <UserAccountNav initialUser={user} />
            </>
          )}

          {!user && (
            <>
              <Button
                className="hidden px-3 md:block"
                variant="default"
                size="sm"
                onClick={signInModal.onOpen}
              >
                Sign In
              </Button>
              <AuthLink
                href="/register"
                text="Sign in"
                className={'flex md:hidden'}
              />
            </>
          )}
          <MobileSheetMenu />
        </div>
      </div>
    </header>
  )
}
