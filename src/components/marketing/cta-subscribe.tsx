'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button-ui'

export default function CtaSubscribe() {
  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [results, setResults] = useState<string>('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData()
    data.set('email', email)

    setLoading(true)

    try {
      const res = await fetch('/api/marketing/create-contact-loopso', {
        method: 'POST',
        body: data,
      })

      if (!res.ok) throw res

      const json = await res.json()

      const dataSuccess = json.data.success

      setResults(json.data.message)

      if (!dataSuccess) {
        toast.error('Something went wrong. Please try again.')
        throw new Error(json.data.message)
      }

      toast.success(
        'Thanks! You have successfully subscribed to our newsletter.'
      )

      setEmail('')
    } catch (error: any) {
      console.error(error)

      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="dark:bg-opacity/50 w-full bg-gray-50 py-12 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-6 size-14 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
          <h3 className="text-balance text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Subscribe to our newsletter
          </h3>
          <p className="mt-6 text-balance text-lg text-gray-600 dark:text-gray-300">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
        </div>
        <div className="mt-6">
          <form
            method="POST"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit(e).catch((err) => console.error({ err }))
            }}
            className="items-center justify-center sm:flex"
          >
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-md border p-3  outline-none focus:border-indigo-600"
              required
            />
            <Button
              disabled={loading}
              loading={loading}
              type="submit"
              className="mt-3 w-full rounded-md bg-indigo-600 px-5 py-3 text-white shadow-md outline-none ring-indigo-600 ring-offset-2 duration-150 hover:bg-indigo-500 focus:shadow-none focus:ring-2 active:bg-indigo-700 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
          {results && (
            <p className="mt-3 text-balance pl-3 text-base text-primary-foreground dark:text-primary">
              {results}
            </p>
          )}
          <p className="mx-auto mt-3 text-center text-[15px] ">
            No spam ever, we are care about the protection of your data. Read
            our{' '}
            <a className="text-indigo-600 underline" href="/privacy-policy">
              {' '}
              Privacy Policy{' '}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
