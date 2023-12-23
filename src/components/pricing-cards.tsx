import Balancer from 'react-wrap-balancer'

import { siteConfig } from '@/config/site'
import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { PricingCardItem } from '@/components/pricing-card-item'

export default async function PricingCards() {
  const user = await getCurrentUser()
  let subscriptionPlan

  if (user) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id)
  }

  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Pricing
        </p>
        <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
          Start at full speed !
        </h2>
      </div>

      <PricingCardItem userId={user?.id} subscriptionPlan={subscriptionPlan} />

      <p className="mt-3 text-center text-base text-muted-foreground">
        <Balancer>
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
        </Balancer>
      </p>
    </section>
  )
}
