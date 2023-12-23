import Image from 'next/image' // Assuming you're using Next.js' Image component
import Link from 'next/link'

import { siteConfig } from '@/config/site'

const IconLogo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/favicons/apple-icon-180x180.png"
        width={40}
        height={40}
        alt={`Logo ${siteConfig.name}`}
      />
    </Link>
  )
}

export default IconLogo
