import type { Metadata } from 'next'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Icons } from '@/components/shared/icons'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Magic Link Sign In',
  description: 'Check your email for the magic link to sign in',
}

export default async function SignInPage(): Promise<JSX.Element> {
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
          <CardTitle className="text-2xl">Success!</CardTitle>
          <CardDescription>
            Check your email for the magic link to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            aria-label="Back to the sign in page"
            href="/login"
            className={buttonVariants()}
          >
            Go to Sign In page
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
