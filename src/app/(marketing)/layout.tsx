import { marketingConfig } from '@/config/marketing'

import { getCurrentUser } from '@/lib/session'

import { NavBar } from '@/components/layout/navigation/main/navbar'
import { SiteFooter } from '@/components/layout/site-footer'
import { CtaBanner } from '@/components/marketing/cta-banner'
import ScrollToTopButton from '@/components/shared/scroll-to-top-button'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser()

  return (
    <>
      <CtaBanner />
      <div className="flex min-h-screen flex-col">
        <NavBar user={user} items={marketingConfig.mainNav} scroll={true} />
        <main className="flex-1">{children}</main>
        <ScrollToTopButton />
        <SiteFooter />
      </div>
    </>
  )
}
