import Image from 'next/image'
import { useTheme } from 'next-themes'

import { siteConfig } from '@/config/site'

export const SideBarLogo = () => {
  const { theme } = useTheme()
  return (
    <Image
      src="/next_saas_logo.png"
      width="44"
      height="44"
      alt={`Logo ${siteConfig.name}`}
    />
  )
}
