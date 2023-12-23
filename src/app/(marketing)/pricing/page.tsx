import { Suspense } from 'react'

import PricingCardsLoading from '@/components/ui/skeleton/pricing-cards'
import PricingCards from '@/components/pricing-cards'
import PricingFaq from '@/components/pricing-faq'

export const metadata = {
  title: 'Pricing',
}

export default async function PricingPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <Suspense fallback={<PricingCardsLoading />}>
        <PricingCards />
      </Suspense>
      <hr className="container" />
      <PricingFaq />
    </div>
  )
}
