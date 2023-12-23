'use client'

import Script from 'next/script'

type TStripePricingTable = {
  clientReferenceId: string
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
          pricing-table-id="prctbl_xxx"
          publishable-key="pk_test_xxx"
          client-reference-id={clientReferenceId}
          customer-email={customerEmail}
        />
      </>
    </>
  )
}
