import Image from 'next/image'
import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import PaginationNST from '@/components/ui/pagination-nst'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'

const UserTableRow = ({ user }) => {
  return (
    <tr>
      <td className="hidden p-3 text-center md:table-cell">
        <Image
          width={40}
          height={40}
          src={user.avatarSrc}
          alt="User Avatar"
          className="inline-block size-10 rounded-full"
        />
      </td>
      <td className="p-3">
        <p className="font-medium">{user.name}</p>
        <p className="text-gray-500">{user.jobTitle}</p>
      </td>
      <td className="hidden p-3 text-gray-500 md:table-cell">{user.email}</td>
      <td className="p-3 text-center">
        <span
          className={`inline-block size-4 rounded-full${user.planBadgeColor} md:hidden`}
        >
          &nbsp;
        </span>
        <div
          className={`hidden rounded-full ${user.planBadgeBg} px-2 py-1 text-xs font-semibold leading-4 ${user.planTextColor} md:inline-block`}
        >
          {user.plan}
        </div>
      </td>
      <td className="p-3 text-center">
        <button
          type="button"
          className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
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

const userData = [
  {
    id: 1,
    name: 'Nansi Hart',
    jobTitle: 'Web Designer',
    email: 'n.hart@example.com',
    avatarSrc: 'https://source.unsplash.com/mEZ3PoFGs_k/64x64',
    plan: 'Agency',
    planBadgeColor: 'bg-emerald-300',
    planBadgeBg: 'bg-emerald-200',
    planTextColor: 'text-emerald-700',
  },
  {
    id: 2,
    name: 'Lia Baker',
    jobTitle: 'Web Developer',
    email: 'l.baker@example.com',
    avatarSrc: 'https://source.unsplash.com/BGz8vO3pK8k/64x64',
    plan: 'Freelancer',
    planBadgeColor: 'bg-blue-300',
    planBadgeBg: 'bg-blue-200',
    planTextColor: 'text-blue-700',
  },
  {
    id: 3,
    name: 'Xavier Rosales',
    jobTitle: 'Author',
    email: 'x.rosales@example.com',
    avatarSrc: 'https://source.unsplash.com/iFgRcqHznqg/64x64',
    plan: 'Trial',
    planBadgeColor: 'bg-orange-300',
    planBadgeBg: 'bg-orange-200',
    planTextColor: 'text-orange-700',
  },
  {
    id: 4,
    name: 'Danyal Clark',
    jobTitle: 'Laravel Developer',
    email: 'd.clark@example.com',
    avatarSrc: 'https://source.unsplash.com/c_GmwfHBDzk/64x64',
    plan: 'Agency',
    planBadgeColor: 'bg-emerald-300',
    planBadgeBg: 'bg-emerald-200',
    planTextColor: 'text-emerald-700',
  },
  {
    id: 5,
    name: 'Keira Simons',
    jobTitle: 'Marketing Director',
    email: 'k.simons@example.com',
    avatarSrc: 'https://source.unsplash.com/QXevDflbl8A/64x64',
    plan: 'Freelancer',
    planBadgeColor: 'bg-blue-300',
    planBadgeBg: 'bg-blue-200',
    planTextColor: 'text-blue-700',
  },
  {
    id: 6,
    name: 'John Doe',
    jobTitle: 'Frontend Developer',
    email: 'john.doe@example.com',
    avatarSrc: 'https://source.unsplash.com/1_cDvzCxw0U/64x64',
    plan: 'Pro',
    planBadgeColor: 'bg-purple-300',
    planBadgeBg: 'bg-purple-200',
    planTextColor: 'text-purple-700',
  },
]

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
              {userData.map((user) => (
                <UserTableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="mb-6 w-full">
        <PaginationNST />
      </div>
    </DashboardShell>
  )
}
