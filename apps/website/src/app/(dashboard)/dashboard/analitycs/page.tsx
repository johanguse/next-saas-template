import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import PaginationNST from '@/components/ui/pagination-nst'

import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'

export const metadata = {
  title: 'Analitycs',
  description: 'Analise your sales.',
}

export default async function StatusPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Analitycs" text="Analise your sales." />
      <section>
        <div className="grid gap-8">
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
              <div className="flex flex-col overflow-hidden rounded border bg-white dark:bg-gray-800 dark:text-gray-100">
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">146</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Sales
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
                    <svg
                      className="hi-solid hi-arrow-circle-up inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>7.9%</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:text-blue-700/70 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  View All Sales
                </a>
              </div>
              <div className="flex flex-col overflow-hidden rounded border bg-white dark:bg-gray-800 dark:text-gray-100">
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">$5,128</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Earnings
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-rose-200 px-2 py-1 text-sm font-semibold leading-4 text-rose-800">
                    <svg
                      className="hi-solid hi-arrow-circle-down inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>6.9%</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:text-blue-700/70 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  View all Earnings
                </a>
              </div>
              <div className="flex flex-col overflow-hidden rounded border bg-white dark:bg-gray-800 dark:text-gray-100">
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">$2,670</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Wallet
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
                    <svg
                      className="hi-solid hi-arrow-circle-up inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5.6%</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:text-blue-700/70 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  Check your Balance
                </a>
              </div>
            </div>
          </>
        </div>
      </section>
      <section>
        <div className="mx-auto w-full xl:mb-0">
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded border bg-white dark:bg-gray-800">
            <div className="mb-0 rounded-t border-0 px-4 py-3">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-1 grow">
                  <h3 className="text-base font-semibold">Page Visits</h3>
                </div>
                <div className="relative w-full max-w-full flex-1 grow px-4 text-right">
                  <button
                    className="mb-1 mr-1 rounded bg-indigo-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-indigo-600"
                    type="button"
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="w-full border-collapse items-center bg-transparent ">
                <thead>
                  <tr>
                    <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-x-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                      Page name
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-x-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                      Visitors
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-x-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                      Unique users
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-x-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                      Bounce rate
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                      /argon/
                    </th>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      4,569
                    </td>
                    <td className="align-center whitespace-nowrap border-x-0 border-t-0 p-4 px-6 text-xs">
                      340
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-arrow-up mr-4 text-emerald-500"></i>
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                      /argon/index.html
                    </th>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      3,985
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      319
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-arrow-down mr-4 text-orange-500"></i>
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                      /argon/charts.html
                    </th>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      3,513
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      294
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-arrow-down mr-4 text-orange-500"></i>
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                      /argon/tables.html
                    </th>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      2,050
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      147
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-arrow-up mr-4 text-emerald-500"></i>
                      50,87%
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                      /argon/profile.html
                    </th>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      1,795
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      190
                    </td>
                    <td className="whitespace-nowrap border-x-0 border-t-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-arrow-down mr-4 text-red-500"></i>
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-6 w-full">
        <PaginationNST />
      </div>
    </DashboardShell>
  )
}
