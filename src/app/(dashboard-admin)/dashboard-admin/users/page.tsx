import Image from 'next/image'

import { prisma } from '@/lib/db'

import PaginationNST from '@/components/ui/pagination-nst'

const UserTableRow = ({ user }) => {
  return (
    <tr className="even:bg-gray-50">
      <td className="hidden p-3 text-center md:table-cell">
        <Image
          width={40}
          height={40}
          src={user.image}
          alt="User Avatar"
          className="inline-block size-10 rounded-full"
        />
      </td>
      <td className="p-3">
        <p className="font-medium">{user.name}</p>
      </td>
      <td className="hidden p-3 text-gray-500 md:table-cell">{user.email}</td>
      <td className="p-3 text-center">
        <span className={`text-sm md:hidden`}>{user.role}</span>
        <div
          className={`hidden rounded-full px-2 py-1 text-xs font-semibold leading-4 md:inline-block`}
        >
          {user.role}
        </div>
      </td>
      <td className="p-3 text-center">
        <button
          type="button"
          className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 active:border-white active:bg-white active:shadow-none"
        >
          <svg
            className="hi-solid hi-pencil inline-block size-4"
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
  )
}

export const metadata = {
  title: 'Users',
  description: 'Manage your users.',
}

export default async function AdminUsersPage() {
  const usersData = await prisma.user.findMany()
  return (
    <>
      <section className="p-10">
        <div className="rounded border border-gray-200 bg-white">
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
                  Role
                </th>
                <th className="bg-gray-100 p-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {usersData.map((user) => (
                <UserTableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="mb-6 w-full px-10">
        <PaginationNST />
      </div>
    </>
  )
}