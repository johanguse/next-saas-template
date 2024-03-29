import { siteConfig } from '@/config/site'

import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'

import { PricingCardItem } from '@/components/pricing-card-item'

import { BlockTitle } from './layout/main-title'

export default async function PricingCards() {
  const user = await getCurrentUser()
  let subscriptionPlan

  if (user) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id)
  }

  return (
    <section className="container flex flex-col items-center text-center">
      <BlockTitle.Wrapper className="mb-10">
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

      <PricingCardItem userId={user?.id} subscriptionPlan={subscriptionPlan} />

      <p className="mt-3 text-balance text-center text-base text-muted-foreground">
        Email{' '}
        <a
          className="font-medium text-primary hover:underline"
          href={`mailto:${siteConfig.mailSupport}`}
        >
          {siteConfig.mailSupport}
        </a>{' '}
        for to contact our support team.
        <br />
        <strong>
          You can test the subscriptions and won&apos;t be charged.
        </strong>
      </p>
    </section>
  )
}
