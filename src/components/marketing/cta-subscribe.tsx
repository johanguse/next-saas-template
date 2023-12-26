import Balancer from 'react-wrap-balancer'

export default function CtaSubscribe() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-slate-900 dark:bg-opacity-50 dark:text-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-6 h-14 w-14 text-gray-300"
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
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Subscribe to our newsletter
          </h3>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            <Balancer>
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </Balancer>
          </p>
        </div>
        <div className="mt-6">
          <form className="items-center justify-center sm:flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border p-3  outline-none focus:border-indigo-600"
            />
            <button className="mt-3 w-full rounded-md bg-indigo-600 px-5 py-3 text-white shadow-md outline-none ring-indigo-600 ring-offset-2 duration-150 hover:bg-indigo-500 focus:shadow-none focus:ring-2 active:bg-indigo-700 sm:ml-3 sm:mt-0 sm:w-auto">
              Subscribe
            </button>
          </form>
          <p className="mx-auto mt-3 max-w-lg text-center text-[15px] ">
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