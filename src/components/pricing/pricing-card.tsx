import React from 'react'

interface Feature {
  name: string
  isPositive: boolean
}

interface PricingTier {
  name: string
  price: string
  description: string
  features: Feature[]
  link: string
}

interface PricingCardProps {
  tier: PricingTier
}

const tiersData: PricingTier[] = [
  {
    name: 'Hobby',
    price: '$0',
    description: 'All basic features included.',
    features: [
      { name: 'Bookmark Favorites', isPositive: true },
      { name: 'Import Bookmarks from Twitter', isPositive: true },
      { name: 'Full-text Search', isPositive: false },
      { name: 'Private Bookmarks (via DMs) 🚧', isPositive: false },
    ],
    link: '/login',
  },
  {
    name: 'Pro',
    price: '$6',
    description: 'For those who expect more.',
    features: [
      { name: 'Bookmark Favorites', isPositive: true },
      { name: 'Manage and Filter Tags', isPositive: true },
      { name: 'Filter by Authors', isPositive: true },
      { name: 'Import Bookmarks from Twitter', isPositive: true },
    ],
    link: '/billing',
  },
]

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
      <div className="p-8 sm:p-10">
        <h3
          className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
          id={`tier-${tier.name.toLowerCase()}`}
        >
          {tier.name}
        </h3>
        <div className="mt-4 flex items-baseline justify-center text-5xl font-bold tracking-tight text-gray-900">
          {tier.price}
          <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
            /mo
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {tier.description}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
          <ul role="list" className="space-y-6">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="shrink-0">
                  <svg
                    className={`size-6 ${
                      feature.isPositive ? 'text-blue-600' : 'text-red-600'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  {feature.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={tier.link}
              className="inline-block w-full rounded-lg bg-gray-900 p-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring hover:ring-gray-900"
              aria-describedby={`tier-${tier.name.toLowerCase()}`}
            >
              Get started today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CardsPricingTable() {
  return (
    <div className="relative z-10 mx-auto my-12 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-8">
        {tiersData.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
    </div>
  )
}
