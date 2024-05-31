'use client'

import { useState } from 'react'

import Link from 'next/link'

import { pricingData } from '@/config/subscriptions'

import { useSigninModal } from '@/hooks/use-signin-modal'

import { Button, buttonVariants } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import { BillingFormButton } from '@/components/forms/billing-form-button'
import { Icons } from '@/components/shared/icons'

import { UserSubscriptionPlan } from '@/root/types'

interface PricingCardsProps {
  userId?: string
  subscriptionPlan?: UserSubscriptionPlan
}

export function PricingCardItem({
  userId,
  subscriptionPlan,
}: PricingCardsProps) {
  const isYearlyDefault =
    !subscriptionPlan?.stripeCustomerId || subscriptionPlan.interval === 'year'
      ? true
      : false
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault)
  const signInModal = useSigninModal()

  const toggleBilling = () => {
    setIsYearly(!isYearly)
  }

  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mb-4 flex items-center gap-5">
        <ToggleGroup
          type="single"
          size="sm"
          defaultValue={isYearly ? 'yearly' : 'monthly'}
          onValueChange={toggleBilling}
          aria-label="toggle-year"
          className="h-9 overflow-hidden rounded-full border bg-background p-1 *:h-7 *:text-muted-foreground"
        >
          <ToggleGroupItem
            value="yearly"
            className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
            aria-label="Toggle yearly billing"
          >
            Yearly (-20%)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="monthly"
            className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
            aria-label="Toggle monthly billing"
          >
            Monthly
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map((offer) => (
          <div
            className={`relative flex flex-col overflow-hidden rounded-xl border ${
              offer.title.toLowerCase() === 'pro' ? 'border-purple-600' : ''
            }`}
            key={offer.title}
          >
            <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
              <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {offer.title}
              </p>

              <div className="flex flex-row">
                <div className="flex items-end">
                  <div className="flex text-left text-4xl font-semibold leading-6">
                    {isYearly && offer.prices.monthly > 0 ? (
                      <>
                        <span className="mr-2 text-muted-foreground line-through">
                          ${offer.prices.monthly}
                        </span>
                        <span>${offer.prices.yearly / 12}</span>
                      </>
                    ) : (
                      `$${offer.prices.monthly}`
                    )}
                  </div>
                  <div className="-mb-1 ml-2 text-left text-sm font-medium">
                    <div>/mo</div>
                  </div>
                </div>
              </div>
              {offer.prices.monthly > 0 ? (
                <div className="text-left text-sm text-muted-foreground">
                  {isYearly
                    ? `$${offer.prices.yearly} will be charged when annual`
                    : 'when charged monthly'}
                </div>
              ) : null}
            </div>

            <div className="flex h-full flex-col justify-between gap-16 p-6">
              <ul className="space-y-2 text-left text-sm font-medium leading-normal">
                {offer.benefits.map((feature) => (
                  <li className="flex items-start" key={feature}>
                    <Icons.check className="mr-3 size-5 shrink-0 text-purple-500" />
                    <p>{feature}</p>
                  </li>
                ))}

                {offer.limitations.length > 0 &&
                  offer.limitations.map((feature) => (
                    <li
                      className="flex items-start text-muted-foreground"
                      key={feature}
                    >
                      <Icons.close className="mr-3 size-5 shrink-0" />
                      <p>{feature}</p>
                    </li>
                  ))}
              </ul>

              {userId && subscriptionPlan ? (
                offer.title === 'Starter' ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      className: 'w-full',
                      variant: 'outline',
                    })}
                  >
                    Go to dashboard
                  </Link>
                ) : (
                  <BillingFormButton
                    year={isYearly}
                    offer={offer}
                    subscriptionPlan={subscriptionPlan}
                  />
                )
              ) : (
                <Button
                  variant={
                    offer.title.toLocaleLowerCase() === 'pro'
                      ? 'default'
                      : 'outline'
                  }
                  onClick={signInModal.onOpen}
                  className="w-full justify-center"
                >
                  Sign in
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
