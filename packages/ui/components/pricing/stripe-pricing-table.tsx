import Script from 'next/script'
import { env } from '@/root/env.mjs'

interface PricingCardProps {
  clientReferenceId?: string | null
  customerEmail?: string | null
}

export default function StripePricingTable({
  clientReferenceId,
  customerEmail,
}: PricingCardProps) {
  return (
    <>
      <Script
        src="https://js.stripe.com/v3/pricing-table.js"
        strategy="afterInteractive"
      />
      <stripe-pricing-table
        pricing-table-id={env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID}
        publishable-key={env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
        client-reference-id={clientReferenceId || ''}
        customer-email={customerEmail || ''}
      ></stripe-pricing-table>
    </>
  )
}
