'use client'

import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Icons } from '@/components/shared/icons'
import { UserAvatar } from '@/components/shared/user-avatar'

import {
  Cog,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  User2Icon,
} from 'lucide-react'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

type UserAccountNavProps = {
  user: Session['user']
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  if (!user) return

  const userRole = user.role

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{
            name: user?.name || null,
            image: user?.image || '/images/avatars/noavatar.png',
          }}
          className="size-9 border-2 border-slate-100 bg-slate-100 dark:border-slate-700 dark:bg-slate-700"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.name && <p className="font-medium">{user?.name}</p>}
            {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/dashboard" className="flex items-center space-x-2.5">
            <LayoutDashboard className="size-4" />
            <p className="text-sm">Dashboard</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href="/dashboard/billing"
            className="flex items-center space-x-2.5"
          >
            <CreditCard className="size-4" />
            <p className="text-sm">Billing</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href="/dashboard/analitycs"
            className="flex items-center space-x-2.5"
          >
            <Icons.barChart className="size-4" />
            <p className="text-sm">Analitycs</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href="/dashboard/users"
            className="flex items-center space-x-2.5"
          >
            <User2Icon className="size-4" />
            <p className="text-sm">Users</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2.5"
          >
            <Settings className="size-4" />
            <p className="text-sm">Settings</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {(userRole === 'ADMIN' || userRole === 'EDITOR') && (
          <>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link
                href="/dashboard-admin"
                className="flex items-center space-x-2.5"
              >
                <Cog className="size-4" />
                <p className="text-sm">Admin dashboard</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/`,
            })
          }}
        >
          <div className="flex items-center space-x-2.5">
            <LogOut className="size-4" />
            <p className="text-sm">Log out </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
