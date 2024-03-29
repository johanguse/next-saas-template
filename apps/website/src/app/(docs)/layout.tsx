import { marketingConfig } from '@/config/marketing'

import { MultiLevelNav } from '@/components/layout/navigation/multi-level/multi-level'
import { SiteFooter } from '@/components/layout/site-footer'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MultiLevelNav items={marketingConfig.multiLevelNav} scroll={false} />
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  )
}
