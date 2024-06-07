import Image from 'next/image'
import Link from 'next/link'

import { prisma } from '@/lib/db'
import { dashboardPrefixURL } from '@/lib/menu-list'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import PaginationNST from '@/components/ui/pagination-nst'

import { ContentLayout } from '@/components/dashboard-admin/content-layout'

const UserTableRow = ({ user }) => {
  return (
    <tr className="text-black even:bg-gray-50 dark:text-white dark:even:bg-gray-700">
      <td className="hidden p-3 text-center md:table-cell">
        {user.image ? (
          <Image
            width={40}
            height={40}
            src={user.image}
            alt={`Profile Image of ${user.name}`}
            className="inline-block size-10 rounded-full"
          />
        ) : null}
      </td>
      <td className="p-3 ">
        <p className="font-medium">{user.name}</p>
      </td>
      <td className="hidden p-3 text-gray-800 dark:text-gray-200 md:table-cell">
        {user.email}
      </td>
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

export default async function UsersPage() {
  const usersData = await prisma.user.findMany({
    take: 12,
    where: {},
    orderBy: [{ createdAt: 'desc' }],
  })
  return (
    <ContentLayout title="Users">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={dashboardPrefixURL}>Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Users</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <table className="min-w-full align-middle text-sm">
          <thead className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-white">
            <tr className="p-3 text-left text-sm font-semibold uppercase tracking-wider">
              <th className="hidden p-3 text-center text-sm font-semibold uppercase tracking-wider md:table-cell">
                Avatar
              </th>
              <th className="p-3 text-left text-sm font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="hidden p-3 text-left text-sm font-semibold uppercase tracking-wider md:table-cell">
                Email
              </th>
              <th className="p-3 text-center text-sm font-semibold uppercase tracking-wider">
                Role
              </th>
              <th className="p-3 text-center text-sm font-semibold uppercase tracking-wider">
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
      <div className="mb-6 w-full px-10">
        <PaginationNST />
      </div>
    </ContentLayout>
  )
}
