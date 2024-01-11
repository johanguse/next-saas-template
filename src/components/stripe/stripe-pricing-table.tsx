'use client'

import Script from 'next/script'
import { env } from '@/root/env.mjs'

type TStripePricingTable = {
  clientReferenceId?: string | null
  customerEmail?: string | null
}
export const StripePricingTable = ({
  clientReferenceId,
  customerEmail,
}: TStripePricingTable) => {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>
      <>
        {/* @ts-ignore */}
        <stripe-pricing-table
          pricing-table-id={env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID}
          publishable-key={env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
          client-reference-id={clientReferenceId}
          customer-email={customerEmail}
        />
      </>
    </>
  )
}
