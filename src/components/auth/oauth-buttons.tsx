'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import { Icons } from '@/components/shared/icons'

import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

function useSearchParam(key: string): string | null {
  const [paramValue, setParamValue] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      setParamValue(urlParams.get(key))
    }
  }, [key])

  return paramValue
}

interface LoadingState {
  google: boolean
  github: boolean
}

export function OAuthButtons(): JSX.Element {
  const callbackUrl = useSearchParam('from')
  const initialLoadingValues = {
    google: false,
    github: false,
  }
  const [isLoading, setIsLoading] = useState<LoadingState>(initialLoadingValues)
  async function handleOAuthSignIn(
    provider: 'google' | 'github'
  ): Promise<void> {
    try {
      await signIn(provider, {
        callbackUrl: callbackUrl || '/dashboard',
      })

      setIsLoading({
        ...initialLoadingValues,
        [provider]: true,
      })

      toast.success('Redirecting...')
    } catch (error) {
      toast.error('Something went wrong<br/>Please try again')

      console.error(error)
      throw new Error(`Error signing in with ${provider}`)
    }

    setIsLoading({
      ...initialLoadingValues,
      [provider]: false,
    })
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
      <Button
        aria-label="Sign in with Google"
        variant="outline"
        onClick={() => {
          setIsLoading({
            ...initialLoadingValues,
            google: true,
          })
          void handleOAuthSignIn('google')
        }}
        className="w-full sm:w-auto"
      >
        {isLoading.google ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 size-4" />
        )}
        Google
      </Button>

      <Button
        aria-label="Sign in with gitHub"
        variant="outline"
        onClick={() => {
          setIsLoading({
            ...initialLoadingValues,
            github: true,
          })
          void handleOAuthSignIn('github')
        }}
        className="w-full sm:w-auto"
      >
        {isLoading.github ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.github className="mr-2 size-4" />
        )}
        GitHub
      </Button>
    </div>
  )
}
