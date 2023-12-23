import React from 'react'

import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'
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
    className={`relative flex w-full flex-col divide-y divide-gray-200 self-stretch overflow-hidden rounded-xl bg-white shadow dark:divide-gray-800 dark:bg-gray-900 ${
      highlighted
        ? 'ring-2 ring-gray-900 lg:z-10 lg:scale-[1.1] dark:ring-white'
        : 'ring-1 ring-gray-200 dark:ring-gray-800'
    }`}
  >
    <div className="flex flex-1 flex-col gap-y-6 p-8 sm:p-6 xl:p-10">
      <h3 className="truncate text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
        {name}
      </h3>
      {index === 1 && (
        <Tag
          labelToken="Most popular"
          size="sm"
          className="bg-primary-500 dark:bg-primary-400 absolute right-10 top-8"
        />
      )}
      <p className="mt-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
        {description}
      </p>
      <p className="text-2xl font-semibold text-gray-900 sm:text-4xl dark:text-white">
        {price}
      </p>
      <ul className="order-last flex-1 space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-x-3">
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
          <div className="flex flex-col items-center text-center">
            <h1 className="relative mb-2 bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-base font-extrabold text-transparent">
              Pricing
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              A plan for every need and titles too
            </h2>
            <p className="mb-8 mt-6 text-lg text-gray-600 dark:text-gray-300">
              Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum
              excepteur.
            </p>
          </div>

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
