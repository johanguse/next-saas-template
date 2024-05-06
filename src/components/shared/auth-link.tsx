import Link from 'next/link'

import { cn } from '@/lib/utils'

import { buttonVariants } from '../ui/button'

interface AuthLinksProps {
  href: string
  variant?: 'default' | 'outline'
  className?: string
  text: string
}

export default function AuthLink({
  href,
  variant,
  className,
  text,
}: AuthLinksProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: variant, size: 'sm' }),
        className
      )}
    >
      {text}
    </Link>
  )
}
