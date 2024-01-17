'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UserSubscriptionPlan } from '@/root/types'

import { pricingData } from '@/config/subscriptions'
import { useSigninModal } from '@/hooks/use-signin-modal'
import { Button, buttonVariants } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Tag } from '@/components/ui/tag'
import { BillingFormButton } from '@/components/forms/billing-form-button'
import { Icons } from '@/components/shared/icons'

interface PricingCardsProps {
  userId?: string
  subscriptionPlan?: UserSubscriptionPlan
}

export function PricingCardItem({
  userId,
  subscriptionPlan,
}: PricingCardsProps) {
  const isYearlyDefault =
    !subscriptionPlan?.interval || subscriptionPlan.interval === 'year'
      ? true
      : false
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault)
  const signInModal = useSigninModal()

  const toggleBilling = () => {
    setIsYearly(!isYearly)
  }

  return (
    <>
      <div className="mb-4 flex items-center gap-5">
        <span>Monthly Billing</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>Annual Billing</span>
      </div>
      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 lg:py-12">
        {pricingData.map((offer, index) => (
          <div
            key={index}
            className={`relative flex flex-col overflow-hidden rounded-xl border ${
              index === 1 ? 'outline lg:z-10 lg:scale-[1.1]' : ''
            }`}
          >
            <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
              <div className="flex flex-row justify-between">
                <p className="flex font-urban text-sm font-bold uppercase tracking-wider">
                  {offer.title}
                </p>
                {isYearly &&
                offer.prices.monthly > 0 &&
                offer.prices.discount !== '' ? (
                  <Tag
                    labelToken={offer.prices.discount}
                    size="sm"
                    className="absolute right-6 top-5 bg-slate-200 dark:bg-slate-950"
                  />
                ) : null}
              </div>

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

            <div className="flex h-full flex-col justify-items-start gap-4 p-6">
              <div className="mb-8">
                {userId && subscriptionPlan ? (
                  offer.title === 'Starter' ? (
                    <Link
                      href="/dashboard"
                      className={buttonVariants({
                        className: 'w-full',
                        variant: 'default',
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
                    variant={index === 1 ? 'default' : 'outline'}
                    className="w-full"
                    onClick={signInModal.onOpen}
                  >
                    Get Started
                  </Button>
                )}
              </div>
              <ul className="space-y-2 text-left text-sm font-medium leading-normal">
                {offer.benefits.map((feature) => (
                  <li className="flex items-start" key={feature}>
                    <Icons.check className="mr-3 size-5 shrink-0" />
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
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
