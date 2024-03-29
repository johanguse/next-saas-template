import { BlockTitle } from '@/components/layout/main-title'
import PlansMarketing from '@/components/marketing/plans'
import CardsPricingTable from '@/components/pricing/pricing-card'
import PlansComparationTable from '@/components/pricing/pricing-comparation-long-table'
import PlansTable from '@/components/pricing/pricing-comparation-table'
import PlansTableNST from '@/components/pricing/pricing-nst'
import OneCardPricingTable from '@/components/pricing/pricing-one-card'
import StripePricingTable from '@/components/pricing/stripe-pricing-table'

export default function PrincingTablesBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="pt-20 text-center">
        <BlockTitle.Wrapper className="mb-20">
          <BlockTitle.Header elementType="h1" className="text-xl">
            Pricing Tables
          </BlockTitle.Header>
          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <StripePricingTable />
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Regular Pricing table NST
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <PlansTableNST />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">Pricing</BlockTitle.Header>
            <BlockTitle.Title elementType="h2">
              Find the plan that&apos;s right for you
            </BlockTitle.Title>
            <BlockTitle.Description>
              Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum
              excepteur.
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <PlansMarketing />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Regular Pricing table
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <PlansTable />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Card Pricing table
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <CardsPricingTable />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Card Pricing table
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <OneCardPricingTable />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">Pricing</BlockTitle.Header>
            <BlockTitle.Title elementType="h2">
              Comparation plans
            </BlockTitle.Title>
            <BlockTitle.Description>
              Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum
              excepteur.
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <PlansComparationTable />
        </div>
      </div>
    </div>
  )
}
