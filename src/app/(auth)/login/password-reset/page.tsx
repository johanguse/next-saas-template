import { type Metadata } from 'next'
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

import { PasswordResetForm } from '@/components/auth/password-reset-form'
import { BlockTitle } from '@/components/layout/main-title'
import { Icons } from '@/components/shared/icons'
import IconLogo from '@/components/shared/logo-icon'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Password Reset',
  description: 'Provide your email address to receive a reset link',
}

export default function PasswordReset(): JSX.Element {
  return (
    <div className="size-screen container flex flex-col items-center justify-center">
      <Link
        href="/login"
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
      <div className="mx-auto mb-8 flex flex-col items-center">
        <IconLogo className="mb-2 size-16" />
        <span className="mb-2 hidden font-urban text-xl font-bold text-black dark:text-white sm:inline-block">
          {siteConfig.name}
        </span>
      </div>
      <Card className="max-sm:flex max-sm:h-screen max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="place-items-start space-y-1">
          <CardTitle>
            <BlockTitle.Wrapper>
              <BlockTitle.Header elementType="h1" className="text-2xl">
                Password Reset
              </BlockTitle.Header>
            </BlockTitle.Wrapper>
          </CardTitle>
          <CardDescription>
            Enter your email to receive a reset link
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <PasswordResetForm />
          <Link
            aria-label="Back to the sign in page"
            href="/login"
            className={buttonVariants({ variant: 'outline' })}
          >
            Cancel
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
