'use client'

import { useCurrentUser } from '@/hooks/use-current-user'

import { SheetMenu } from '@/components/admin-panel/sheet-menu'
import { ModeToggle } from '@/components/layout/mode-toggle'
import { UserAccountNav } from '@/components/layout/navigation/user-account-nav'

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  const user = useCurrentUser()
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
          <UserAccountNav user={user!} />
        </div>
      </div>
    </header>
  )
}
