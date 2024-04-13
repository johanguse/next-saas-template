import { type Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { siteConfig } from '@/config/site'

import { auth } from '@/lib/auth/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/lib/auth/routes'
import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { OAuthButtons } from '@/components/auth/oauth-buttons'
import { SignInWithEmailForm } from '@/components/auth/signin-with-email-form'
import { SignUpWithPasswordForm } from '@/components/auth/signup-with-password-form'
import { Icons } from '@/components/shared/icons'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Sign Up',
  description: 'Sign up for an account',
}

export default async function SignUpPage(): Promise<JSX.Element> {
  const session = await auth()
  if (session) redirect(DEFAULT_LOGIN_REDIRECT)

  return (
    <div className="size-screen container flex flex-col items-center justify-center">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <Card className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Register</CardTitle>
            <Link href="/">
              <Icons.close className="size-4" />
            </Link>
          </div>
          <CardDescription>
            Choose your preferred sign up method
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:w-full max-sm:max-w-[340px] max-sm:px-10">
          <OAuthButtons />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative mb-3 mt-6 flex justify-center text-xs uppercase">
              <span className="bg-background px-2">
                Or continue with magic link
              </span>
            </div>
          </div>
          <SignInWithEmailForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative mb-3 mt-6 flex justify-center text-xs uppercase">
              <span className="bg-background px-2">
                Or continue with password
              </span>
            </div>
          </div>
          <SignUpWithPasswordForm />
        </CardContent>
        <CardFooter className="grid w-full gap-4 text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <div>
              <span> Already have an account? </span>
              <Link
                aria-label="Sign in"
                href="/login"
                className="font-bold tracking-wide text-primary underline-offset-4 transition-all hover:underline"
              >
                Sign in
                <span className="sr-only">Sign in</span>
              </Link>
              .
            </div>
            <div>
              <span>Lost email verification link? </span>
              <Link
                aria-label="Resend email verification link"
                href="/register/reverify-email"
                className="text-sm font-normal text-primary underline-offset-4 transition-colors hover:underline"
              >
                Resend
                <span className="sr-only">Resend email verification link</span>
              </Link>
              .
            </div>
          </div>

          <div className="text-sm text-muted-foreground md:text-xs">
            By continuing, you agree to our{' '}
            <Link
              aria-label="Terms of Service"
              href="/legal/terms-of-service"
              className="font-semibold underline-offset-4 transition-all hover:underline"
            >
              terms of service
            </Link>{' '}
            <br className="xs:hidden sm:block md:hidden" />
            and
            <Link
              aria-label="Privacy Policy"
              href="/legal/privacy-policy"
              className="font-semibold underline-offset-4 transition-all hover:underline"
            >
              {' '}
              Privacy Policy
            </Link>
            .
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
