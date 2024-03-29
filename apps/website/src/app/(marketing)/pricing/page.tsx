import { Suspense } from 'react'

import PricingCardsLoading from '@/components/ui/skeleton/pricing-cards'

import { BlockTitle } from '@/components/layout/main-title'
import FAQ from '@/components/marketing/faq'
import PricingCards from '@/components/pricing-cards'

export const metadata = {
  title: 'Pricing',
}

export default async function PricingPage() {
  return (
    <section className="py-32">
      <div className="flex w-full flex-col gap-16 py-8 md:py-8">
        <Suspense fallback={<PricingCardsLoading />}>
          <PricingCards />
        </Suspense>
        <hr className="container" />

        <div className="mx-auto flex max-w-3xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">
              Freequently Asked Questions{' '}
            </BlockTitle.Title>

            <BlockTitle.Description>
              Explore our comprehensive FAQ to find quick answers to common
              inquiries. If you need further assistance, don&apos;t hesitate to
              contact us for personalized help.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <FAQ />
        </div>
      </div>
    </section>
  )
}
