'use client'

import { useSearchParams } from 'next/navigation'

import { DEFAULT_LOGIN_REDIRECT } from '@/lib/auth/routes'

import { Button } from '@/components/ui/button'

import { Icons } from '@/components/shared/icons'

import { signIn } from 'next-auth/react'

export const Social = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <Icons.google className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <Icons.github className="size-5" />
      </Button>
    </div>
  )
}
