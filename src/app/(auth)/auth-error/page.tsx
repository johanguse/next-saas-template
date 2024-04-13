import Link from 'next/link'

import type { PageParams } from '@/types/next'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Icons } from '@/components/shared/icons'

import { getError } from './auth-error-mapping'

export default async function AuthErrorPage(props: PageParams<{}>) {
  const { errorMessage, error } = getError(props.searchParams.error)

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
      <Card variant="error">
        <CardHeader>
          <CardDescription>{error}</CardDescription>
          <CardTitle>{errorMessage}</CardTitle>
        </CardHeader>
        <CardFooter className="flex items-center gap-2">
          <Link href="/login" className={buttonVariants({ size: 'sm' })}>
            Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
