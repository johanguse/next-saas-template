import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import { MainSidebar } from '@/components/dashboard-admin/main-sidebar'

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
    <div className="grid grid-cols-[16rem_1fr]">
      <MainSidebar user={user} />
      <main>{children}</main>
    </div>
  )
}
