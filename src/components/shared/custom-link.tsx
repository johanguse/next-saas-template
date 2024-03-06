import Link from 'next/link'

import { cn } from '@/lib/utils'

import { ExternalLink } from 'lucide-react'

interface CustomLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const CustomLink = ({
  href,
  children,
  className,
  ...rest
}: CustomLinkProps) => {
  const isInternalLink = href.startsWith('/')
  const isAnchorLink = href.startsWith('#')

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('items-center underline', className)}
      {...rest}
    >
      {children}
      <ExternalLink className=" ml-0.5 inline-block size-4" />
    </Link>
  )
}

export default CustomLink
