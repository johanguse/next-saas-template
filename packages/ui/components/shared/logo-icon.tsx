import Image from 'next/image'

import { siteConfig } from '@/config/site'

interface IconLogoProps {
  className?: string
}

export default function IconLogo({ className }: IconLogoProps) {
  return (
    <Image
      src="/next_saas_logo.png"
      width={40}
      height={40}
      className={className}
      alt={`Logo for ${siteConfig.name}`}
      priority
    />
  )
}
