import Link from 'next/link'

import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'

import { getCurrentUser } from '@/lib/session'

import { DocsSearch } from '@/components/docs/search'
import { MultiLevelNav } from '@/components/layout/navigation/multi-level/multi-level'
import { SiteFooter } from '@/components/layout/site-footer'
import { Icons } from '@/components/shared/icons'

interface DocsLayoutProps {
  children: React.ReactNode
}

const twitterLink = siteConfig.social?.links?.twitter

const rightHeader = () => (
  <div className="flex flex-1 items-center space-x-4 sm:justify-end">
    <div className="hidden lg:flex lg:grow-0">
      <DocsSearch />
    </div>
    <div className="flex lg:hidden">
      <Icons.search className="size-6 text-muted-foreground" />
    </div>
    {twitterLink && (
      <nav className="flex space-x-4">
        <Link href={twitterLink} target="_blank" rel="noreferrer">
          <Icons.github className="size-7" />
          <span className="sr-only">GitHub</span>
        </Link>
      </nav>
    )}
  </div>
)

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <MultiLevelNav
        user={user}
        items={marketingConfig.multiLevelNav}
        scroll={false}
      />
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  )
}
