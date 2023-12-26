import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

const IconLogo: React.FC = () => {
  return (
    <Image
      src="/favicons/apple-icon-180x180.png"
      width={40}
      height={40}
      alt={`Logo ${siteConfig.name}`}
    />
  )
}

export default IconLogo
