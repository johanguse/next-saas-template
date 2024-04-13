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

import { EmailVerificationForm } from '@/components/auth/email-verification-form'
import { Icons } from '@/components/shared/icons'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Email Verification',
  description: 'Provide your email address to receive the verification link',
}

export default function ReverifyEmailPage(): JSX.Element {
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
      <Card className="max-sm:flex max-sm:h-screen max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Email Verification</CardTitle>
          <CardDescription>
            Enter your email to receive a verification link
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <EmailVerificationForm />
          <Link
            aria-label="Cancel email reverification"
            href="/register"
            className={buttonVariants({ variant: 'outline' })}
          >
            <span className="sr-only">Cancel email reverification</span>
            Cancel
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
