import React from 'react'

import { Button } from '@/components/ui/button'

import { Icons } from '@/components/shared/icons'

type PlanProps = {
  name: string
  description: string
  price: string
  features: string[]
  highlighted?: boolean
  index: number
}

const Plan: React.FC<PlanProps> = ({
  name,
  description,
  price,
  features,
  highlighted,
  index,
}) => (
  <div
    className={`relative flex w-full flex-col divide-y divide-gray-200 self-stretch rounded-xl bg-white shadow dark:divide-gray-800 dark:bg-gray-900 ${
      highlighted
        ? 'ring-2 ring-gray-900 dark:ring-white lg:z-10 lg:scale-[1.1]'
        : 'ring-1 ring-gray-200 dark:ring-gray-800'
    }`}
  >
    {index === 1 && (
      <div className="absolute inset-x-0 mx-auto -mt-4 text-center">
        <div className="inline-flex items-center rounded-full bg-fuchsia-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
          Most Popular
        </div>
      </div>
    )}
    <div className="flex flex-1 flex-col gap-y-6 rounded-xl p-8 sm:p-6 xl:p-10">
      <h3 className="truncate text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
        {name}
      </h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
        {description}
      </p>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
        {price}
      </p>
      <ul className="order-last flex-1 space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-x-3 text-left">
            <Icons.add height={12} width={12} />
            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={index === 1 ? 'default' : 'outline'} className="w-full">
        Get Started
      </Button>
    </div>
  </div>
)

export default function PlansMarketing() {
  const plans = [
    {
      name: 'Basic',
      description: 'A basic plan for individuals.',
      price: '$9.99',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        'Free updates: 6 months',
        '36-hour support response time',
      ],
    },
    {
      name: 'Standard',
      description: 'A standard plan for small teams.',
      price: '$19.99',
      features: [
        '15 products',
        'Up to 100,000 subscribers',
        'Advanced analytics',
        'Free updates: 12 months',
        '48-hour support response time',
        '10 Support Tickets',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      description: 'A premium plan for large teams.',
      price: '$49.99',
      features: [
        '25 products',
        'Unlimited subscribers',
        'Advanced analytics',
        'Free updates: 12 months',
        '24-hour support response time',
        '25 Support Tickets',
        'Priority Support',
      ],
    },
  ]

  return (
    <section className="py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
          <div className="-mt-14 flex w-full flex-col items-center gap-8 py-16 lg:grid lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Plan key={index} {...plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
