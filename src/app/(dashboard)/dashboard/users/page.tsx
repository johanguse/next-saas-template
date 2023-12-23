import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import Pagination from '@/components/ui/pagination'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'

export const metadata = {
  title: 'Users',
  description: 'Manage your users.',
}

export default async function StatusPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Users" text="Manage your users." />
      <section className="grid gap-8">
        <div className="min-w-full overflow-x-auto rounded border border-gray-200 bg-white">
          <table className="min-w-full align-middle text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="hidden bg-gray-100 p-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 md:table-cell">
                  Avatar
                </th>
                <th className="bg-gray-100 p-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Name
                </th>
                <th className="hidden bg-gray-100 p-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700 md:table-cell">
                  Email
                </th>
                <th className="bg-gray-100 p-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Plan
                </th>
                <th className="bg-gray-100 p-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="hidden p-3 text-center md:table-cell">
                  <img
                    src="https://source.unsplash.com/mEZ3PoFGs_k/64x64"
                    alt="User Avatar"
                    className="inline-block h-10 w-10 rounded-full"
                  />
                </td>
                <td className="p-3">
                  <p className="font-medium">Nansi Hart</p>
                  <p className="text-gray-500">Web Designer</p>
                </td>
                <td className="hidden p-3 text-gray-500 md:table-cell">
                  n.hart@example.com
                </td>
                <td className="p-3 text-center">
                  <span className="inline-block h-4 w-4 rounded-full bg-emerald-300 md:hidden">
                    &nbsp;
                  </span>
                  <div className="hidden rounded-full bg-emerald-200 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700 md:inline-block">
                    Agency
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                  >
                    <svg
                      className="hi-solid hi-pencil inline-block h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="hidden p-3 text-center md:table-cell">
                  <img
                    src="https://source.unsplash.com/BGz8vO3pK8k/64x64"
                    alt="User Avatar"
                    className="inline-block h-10 w-10 rounded-full"
                  />
                </td>
                <td className="p-3">
                  <p className="font-medium">Lia Baker</p>
                  <p className="text-gray-500">Web Developer</p>
                </td>
                <td className="hidden p-3 text-gray-500 md:table-cell">
                  l.baker@example.com
                </td>
                <td className="p-3 text-center">
                  <span className="inline-block h-4 w-4 rounded-full bg-blue-300 md:hidden">
                    &nbsp;
                  </span>
                  <div className="hidden rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold leading-4 text-blue-700 md:inline-block">
                    Freelancer
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                  >
                    <svg
                      className="hi-solid hi-pencil inline-block h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="hidden p-3 text-center md:table-cell">
                  <img
                    src="https://source.unsplash.com/iFgRcqHznqg/64x64"
                    alt="User Avatar"
                    className="inline-block h-10 w-10 rounded-full"
                  />
                </td>
                <td className="p-3">
                  <p className="font-medium">Xavier Rosales</p>
                  <p className="text-gray-500">Author</p>
                </td>
                <td className="hidden p-3 text-gray-500 md:table-cell">
                  x.rosales@example.com
                </td>
                <td className="p-3 text-center">
                  <span className="inline-block h-4 w-4 rounded-full bg-orange-300 md:hidden">
                    &nbsp;
                  </span>
                  <div className="hidden rounded-full bg-orange-200 px-2 py-1 text-xs font-semibold leading-4 text-orange-700 md:inline-block">
                    Trial
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                  >
                    <svg
                      className="hi-solid hi-pencil inline-block h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="hidden p-3 text-center md:table-cell">
                  <img
                    src="https://source.unsplash.com/c_GmwfHBDzk/64x64"
                    alt="User Avatar"
                    className="inline-block h-10 w-10 rounded-full"
                  />
                </td>
                <td className="p-3">
                  <p className="font-medium">Danyal Clark</p>
                  <p className="text-gray-500">Laravel Developer</p>
                </td>
                <td className="hidden p-3 text-gray-500 md:table-cell">
                  d.clark@example.com
                </td>
                <td className="p-3 text-center">
                  <span className="inline-block h-4 w-4 rounded-full bg-emerald-300 md:hidden">
                    &nbsp;
                  </span>
                  <div className="hidden rounded-full bg-emerald-200 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700 md:inline-block">
                    Agency
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                  >
                    <svg
                      className="hi-solid hi-pencil inline-block h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="hidden p-3 text-center md:table-cell">
                  <img
                    src="https://source.unsplash.com/QXevDflbl8A/64x64"
                    alt="User Avatar"
                    className="inline-block h-10 w-10 rounded-full"
                  />
                </td>
                <td className="p-3">
                  <p className="font-medium">Keira Simons</p>
                  <p className="text-gray-500">Marketing Director</p>
                </td>
                <td className="hidden p-3 text-gray-500 md:table-cell">
                  k.simons@example.com
                </td>
                <td className="p-3 text-center">
                  <span className="inline-block h-4 w-4 rounded-full bg-blue-300 md:hidden">
                    &nbsp;
                  </span>
                  <div className="hidden rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold leading-4 text-blue-700 md:inline-block">
                    Freelancer
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                  >
                    <svg
                      className="hi-solid hi-pencil inline-block h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="mb-6 w-full">
        <Pagination />
      </div>
    </DashboardShell>
  )
}
