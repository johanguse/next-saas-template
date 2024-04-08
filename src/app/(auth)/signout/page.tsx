import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { siteConfig } from '@/config/site'

import { auth } from '@/lib/auth/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/lib/auth/routes'
import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { LogoutButton } from '@/components/auth/logout-button'
import { Icons } from '@/components/shared/icons'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Sign Out',
  description: 'Sign out of your account',
}

export default async function SignInPage(): Promise<JSX.Element> {
  const session = await auth()
  if (session) {
    return redirect(DEFAULT_LOGIN_REDIRECT)
  }

  return (
    <div className="size-screen container flex flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'sm' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 size-4" />
          Back
        </>
      </Link>
      <Card className="max-sm:flex  max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Logout</CardTitle>
            <Link href="/">
              <Icons.close className="size-4" />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="max-sm:w-full max-sm:max-w-[340px] max-sm:px-10">
          <LogoutButton>
            <Icons.close className="size-4" />
            Sign out
          </LogoutButton>
        </CardContent>
      </Card>
    </div>
  )
}
