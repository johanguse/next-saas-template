'use client'

import { useMemo } from 'react'

import { getInitials } from '@/lib/utils'

import { AvatarProps } from '@radix-ui/react-avatar'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Icons } from '@/components/shared/icons'

import { useUserStore } from '@/store/use-user-store'

interface UserAvatarProps extends AvatarProps {
  user?: {
    name?: string | null
    image?: string | null
  }
}

const getFullImageUrl = (url: string | null) => {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const r2DevUrl = process.env.NEXT_PUBLIC_R2_DEV_URL
  return `${r2DevUrl}/${url}`
}

export function UserAvatar({ user: propUser, ...props }: UserAvatarProps) {
  const storeUser = useUserStore((state) => state.user)

  const displayUser = useMemo(
    () => ({
      name: propUser?.name ?? storeUser?.name ?? null,
      image: propUser?.image ?? storeUser?.image ?? null,
    }),
    [propUser, storeUser]
  )

  const avatarUrl = useMemo(() => {
    const url = displayUser.image ? getFullImageUrl(displayUser.image) : null
    return url ? `${url}?t=${Date.now()}` : null
  }, [displayUser.image])

  return (
    <Avatar {...props}>
      {avatarUrl ? (
        <AvatarImage
          alt={displayUser.name || 'User Avatar'}
          src={avatarUrl}
          referrerPolicy="no-referrer"
        />
      ) : (
        <AvatarFallback>
          <span className="sr-only">
            {getInitials(displayUser.name) || 'User Avatar'}
          </span>
          <Icons.user className="size-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
