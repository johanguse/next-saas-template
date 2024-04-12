import Link from 'next/link'

import type { PageParams } from '@/types/next'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getError } from './auth-error-mapping'

export default async function AuthErrorPage(props: PageParams<{}>) {
  const { errorMessage, error } = getError(props.searchParams.error)

  return (
    <div className="flex h-full flex-col">
      <Card variant="error">
        <CardHeader>
          <CardDescription>{error}</CardDescription>
          <CardTitle>{errorMessage}</CardTitle>
        </CardHeader>
        <CardFooter className="flex items-center gap-2">
          <Link href="/" className={buttonVariants({ size: 'sm' })}>
            Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
