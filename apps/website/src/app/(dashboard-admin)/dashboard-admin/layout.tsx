import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import { Sidebar } from '@/components/dashboard-admin/sidebar'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardAdminLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
      <Sidebar user={user} />
      <div className="ml-64 flex size-full flex-col p-4">{children}</div>
    </div>
  )
}
