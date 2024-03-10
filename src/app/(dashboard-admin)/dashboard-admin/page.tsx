import { redirect } from 'next/navigation'

import Header from '@/components/dashboard-admin/header'
import { SideBar } from '@/components/dashboard-admin/sidebar'
import { DashboardShell } from '@/components/dashboard/shell'
import { getCurrentUser } from '@/lib/session'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      <SideBar />
      <Header user={user} />
    </DashboardShell>
  )
}
