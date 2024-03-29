import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { LogOut, RocketIcon, Settings, Settings2 } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

type UserDropdownProps = {
  user: Session['user']
}

export function UserDropdown({ user }: UserDropdownProps) {
  if (!user) return

  const userRole = user.role

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative flex h-8 w-full cursor-pointer items-center justify-between space-x-2 !px-0 hover:no-underline"
        >
          <Avatar className="size-8">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex flex-1 flex-col space-y-1 text-left">
            {user.name && (
              <p className="text-sm font-medium leading-none">{user.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 cursor-pointer"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="cursor-pointer font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Settings2 className="mr-3 size-3" />
            Configuraçoes
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <RocketIcon className="mr-3 size-3" />
            Upgrade
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {(userRole === 'ADMIN' || userRole === 'EDITOR') && (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2.5"
                >
                  <Settings className="size-3" />
                  <p className="text-sm">Regular dashboard</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <LogOut className="mr-3 size-3" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
