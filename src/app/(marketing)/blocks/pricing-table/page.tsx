'use client'

import { useState } from 'react'

import { BlockTitle } from '@/components/layout/main-title'
import PlansMarketing from '@/components/marketing/plans'
import PlansTable from '@/components/pricing/pricing-comparison-table'
import { StripePricingTable } from '@/components/stripe/stripe-pricing-table'

interface PricingTabProps {
  yearly: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    yearly: number
  }
  planDescription: string
  features: string[]
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full ${props.popular ? 'dark' : ''}`}>
      <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
            {props.planName}
          </div>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
              $
            </span>
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="font-medium text-slate-500">/mo</span>
          </div>
          <div className="mb-5 text-sm text-slate-500">
            {props.planDescription}
          </div>
          <a
            className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
            href="#0"
          >
            Purchase Plan
          </a>
        </div>
        <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
          Includes:
        </div>
        <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true)

  return (
    <div>
      {/* Pricing toggle */}
      <div className="m-auto mb-8 flex max-w-[14rem] justify-center lg:mb-16">
        <div className="relative flex w-full rounded-full bg-white p-1 dark:bg-slate-900">
          <span
            className="pointer-events-none absolute inset-0 m-1"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 rounded-full bg-indigo-500 shadow-sm shadow-indigo-950/10 transition-transform duration-150 ease-in-out${
                isAnnual ? 'translate-x-0' : 'translate-x-full'
              }`}
            ></span>
          </span>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${
              isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'
            }`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
          >
            Yearly{' '}
            <span
              className={`${
                isAnnual
                  ? 'text-indigo-200'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              -20%
            </span>
          </button>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${
              isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'
            }`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={isAnnual}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
        {/* Pricing tab 1 */}
        <PricingTab
          yearly={isAnnual}
          planName="Essential"
          price={{ yearly: 29, monthly: 35 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
          ]}
        />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Perform"
          price={{ yearly: 49, monthly: 55 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={isAnnual}
          planName="Enterprise"
          price={{ yearly: 79, monthly: 85 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
            'Free from repetition',
          ]}
        />
      </div>
    </div>
  )
}

export default function PrincingTablesBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto text-center">
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Title elementType="h1" className="mb-10">
              Pricing table
            </BlockTitle.Title>
            <BlockTitle.Header elementType="h2">
              Stripe Embeddable pricing table
            </BlockTitle.Header>
            <BlockTitle.Description
              elementType="div"
              className="font-xs text-slate-500 dark:text-slate-400"
            >
              <small>
                More information:{' '}
                <a
                  href="https://stripe.com/docs/payments/checkout/pricing-table"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://stripe.com/docs/payments/checkout/pricing-table
                </a>
              </small>
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <StripePricingTable />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Regular Pricing table
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <PricingTable />
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Regular Pricing table
            </BlockTitle.Header>
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
              Regular Pricing table
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <div className="relative z-10 mx-auto my-12 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                <div className="p-8 sm:p-10">
                  <h3
                    className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                    id="tier-hobby"
                  >
                    Hobby
                  </h3>
                  <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                    $0
                    <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                      /mo
                    </span>
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    All basic features included.
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-2">
                  <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                    <ul role="list" className="space-y-6">
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                          Bookmark Favorites
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                          Import Bookmarks from Twitter
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-6 text-gray-600">
                          Full-text Search
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-6 text-gray-600">
                          Private Bookmarks (via DMs) 🚧{' '}
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <a
                        href="/login"
                        className="inline-block w-full rounded-lg bg-gray-900 p-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring hover:ring-gray-900"
                        aria-describedby="tier-team"
                      >
                        Get started today
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                <div className="p-8 sm:p-10">
                  <h3
                    className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                    id="tier-team"
                  >
                    Pro
                  </h3>
                  <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                    $6
                    <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                      /mo
                    </span>
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    For those who expect more.
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-2">
                  <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                    <ul role="list" className="space-y-6">
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                          Bookmark Favorites
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                          Manage and Filter Tags
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                          Filter by Authors
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="shrink-0">
                          <svg
                            className="h-6 w-6 text-blue-600"
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
                          Import Bookmarks from Twitter
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <a
                        href="/billing"
                        className="inline-block w-full rounded-lg bg-gray-900 p-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring hover:ring-gray-900"
                        aria-describedby="tier-team"
                      >
                        Get started today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-44">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h2">
              Card Pricing table
            </BlockTitle.Header>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <div className="relative z-50 mx-auto max-w-7xl bg-white px-6 lg:px-8">
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  Monthly Pricing
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Choose our monthly subscription plan that would suit your
                  extra needs. Cancel anytime. Custom enterprise pricing is
                  available upon request.{' '}
                  <a
                    href="/contact"
                    className="text-blue-500 underline underline-offset-4"
                  >
                    Just email us here!
                  </a>
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="20"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                      id="IconChangeColor"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                            clipRule="nonzero"
                            id="mainIconPathAttribute"
                            fill="green"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="green"
                          d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                          fillOpacity="1"
                          fillRule="nonzero"
                          id="mainIconPathAttribute"
                        ></path>
                      </g>
                    </svg>{' '}
                    <span className="mx-1 font-bold">1000</span>
                    <span>Resumes / Check</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="20"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                      id="IconChangeColor"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                            clipRule="nonzero"
                            id="mainIconPathAttribute"
                            fill="green"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="green"
                          d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                          fillOpacity="1"
                          fillRule="nonzero"
                          id="mainIconPathAttribute"
                        ></path>
                      </g>
                    </svg>{' '}
                    <span className="mx-1 font-bold">30</span>
                    <span>Job Posts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="20"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                      id="IconChangeColor"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                            clipRule="nonzero"
                            id="mainIconPathAttribute"
                            fill="green"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="green"
                          d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                          fillOpacity="1"
                          fillRule="nonzero"
                          id="mainIconPathAttribute"
                        ></path>
                      </g>
                    </svg>{' '}
                    <span className="mx-1 font-bold">24/7</span>
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="20"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                      id="IconChangeColor"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                            clipRule="nonzero"
                            id="mainIconPathAttribute"
                            fill="green"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="green"
                          d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                          fillOpacity="1"
                          fillRule="nonzero"
                          id="mainIconPathAttribute"
                        ></path>
                      </g>
                    </svg>{' '}
                    <span className="mx-1 font-bold"></span>
                    <span>Custom Hosting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      zoomAndPan="magnify"
                      viewBox="0 0 30 30.000001"
                      height="20"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.0"
                      id="IconChangeColor"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                            clipRule="nonzero"
                            id="mainIconPathAttribute"
                            fill="green"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#id1)">
                        <path
                          fill="green"
                          d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                          fillOpacity="1"
                          fillRule="nonzero"
                          id="mainIconPathAttribute"
                        ></path>
                      </g>
                    </svg>{' '}
                    <span className="mx-1 font-bold"></span>
                    <span>White Label Access</span>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Monthly
                    </p>
                    <p className="mb-12 mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900 ">
                        <span className="px-2 line-through">$29</span>
                        <span className="italic text-gray-700">FREE*</span>
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                      </span>
                    </p>
                    <a
                      href="/signup"
                      className="my-6 block w-full rounded-sm bg-blue-600 py-2 text-white"
                    >
                      Get Started →
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
