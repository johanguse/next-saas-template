'use client'

import { cn } from '@/lib/utils'

import { useSideBarToggle } from '@/hooks/use-sidebar-toggle'

import { UserNav } from '@/components/dashboard-admin/usernav'
import { ModeToggle } from '@/components/layout/mode-toggle'
import { Icons } from '@/components/shared/icons'

import { buttonVariants } from '../ui/button'
import { Link, MessageSquareText } from 'lucide-react'
import type { User } from 'next-auth'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'image' | 'email'> | undefined
}
export default function Header({ user }: UserAccountNavProps) {
  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle()
  const sidebarToggle = () => {
    invokeToggleCollapse()
  }
  const headerStyle = cn(
    'bg-sidebar fixed z-[99997] w-full px-4 shadow-sm shadow-slate-500/40',
    {
      ['sm:pl-[20rem]']: !toggleCollapse,
      ['sm:pl-[5.6rem]']: toggleCollapse,
    }
  )
  return (
    <header className={headerStyle}>
      <div className="flex h-16 justify-end">
        <div className="order-1 flex items-center justify-between sm:order-2">
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
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
          </div>
          <div className="bg-bg-sidebar-muted ml-9 flex size-10 items-center justify-center rounded-full text-center">
            <UserNav
              user={{ name: user?.name || null, image: user?.image || null }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
