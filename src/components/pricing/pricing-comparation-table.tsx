import { Check, X } from 'lucide-react'

export default function PlansTable() {
  return (
    <section className="body-font overflow-hidden border-t border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-200">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mt-48 hidden lg:block lg:w-1/4 ">
          <div className="mt-px overflow-hidden rounded-l-lg border-y border-l border-gray-300 dark:border-gray-700 dark:bg-slate-900">
            <p className="-mt-px flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Fingerstache disrupt
            </p>
            <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900 dark:text-gray-100">
              Franzen hashtag
            </p>
            <p className="-mt-px flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Tilde art party
            </p>
            <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900 dark:text-gray-100">
              Banh mi cornhole
            </p>
            <p className="-mt-px flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Waistcoat squid hexagon
            </p>
            <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900 dark:text-gray-100">
              Pinterest occupy authentic
            </p>
            <p className="-mt-px flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Brooklyn helvetica
            </p>
            <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900 dark:text-gray-100">
              Long Feature Two
            </p>
            <p className="-mt-px flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Feature One
            </p>
          </div>
        </div>
        <div className="z-10 flex w-full flex-wrap rounded-lg border-gray-300 bg-white dark:border-gray-700 dark:bg-slate-900 lg:w-3/4 lg:border">
          <div className="dark:transparent mb-10 w-full rounded-lg border-2 border-gray-300 lg:mb-0 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
            <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
              <h3 className="tracking-widest">START</h3>
              <h2 className="mb-4 mt-2 text-5xl font-medium leading-none text-gray-900 dark:text-white">
                Free
              </h2>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Forever
              </span>
            </div>
            <p className="-mt-px flex h-12 items-center justify-center border-t border-gray-300 bg-gray-100 px-2 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              Schlitz single-origin
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-900  dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900  dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-gray-600">
              Feature
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900  dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-400 dark:text-gray-600">
              <X />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-400 dark:bg-gray-800 dark:text-gray-600">
              <X />
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-400 dark:text-gray-600">
              <X />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-400 dark:bg-gray-800 dark:text-gray-600">
              <X />
            </p>
            <div className="rounded-bl-lg border-t border-gray-300 p-6 text-center dark:border-gray-700">
              <button className="mt-auto flex w-full items-center rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                Start Free
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-auto h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven`t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="dark:transparent mb-10 w-full rounded-lg border-2 border-gray-300 lg:mb-0 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
            <span className="absolute right-0 top-0 rounded-bl bg-indigo-500 px-3 py-1 text-xs tracking-widest text-white">
              POPULAR
            </span>
            <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
              <h3 className="tracking-widest">PRO</h3>
              <h2 className="mb-4 mt-2 flex items-center justify-center text-5xl font-medium leading-none text-gray-900 dark:text-white">
                $38
                <span className="ml-1 text-base text-gray-600 dark:text-gray-300">
                  /mo
                </span>
              </h2>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Charging $456 per year
              </span>
            </div>
            <p className="-mt-px flex h-12 items-center justify-center border-t border-gray-300 bg-gray-100 px-2 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              Schlitz single-origin
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-900  dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900  dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-gray-600">
              Feature
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900  dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-900 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-400 dark:text-gray-600">
              <X />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-400 dark:bg-gray-800 dark:text-gray-600">
              <X />
            </p>
            <div className="rounded-bl-lg border-t border-gray-300 p-6 text-center dark:border-gray-700">
              <button className="mt-auto flex w-full items-center rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                Join Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-auto h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven`t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="dark:transparent mb-10 w-full rounded-lg border-2 border-gray-300 lg:mb-0 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
            <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
              <h3 className="tracking-widest">BUSINESS</h3>
              <h2 className="mb-4 mt-2 flex items-center justify-center text-5xl font-medium leading-none text-gray-900 dark:text-white">
                $54
                <span className="ml-1 text-base text-gray-600 dark:text-gray-300">
                  /mo
                </span>
              </h2>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Charging $648 per year
              </span>
            </div>
            <p className="-mt-px flex h-12 items-center justify-center border-t border-gray-300 bg-gray-100 px-2 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              Schlitz single-origin
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-900  dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900  dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-gray-600">
              Feature
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900  dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-900 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center text-center text-gray-900 dark:text-gray-100">
              <Check />
            </p>
            <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              <Check />
            </p>
            <div className="rounded-bl-lg border-t border-gray-300 p-6 text-center dark:border-gray-700">
              <button className="mt-auto flex w-full items-center rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                Join now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-auto h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven`t heard of them jean shorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
