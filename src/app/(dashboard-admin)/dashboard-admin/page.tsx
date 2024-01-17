import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import Header from '@/components/dashboard-admin/header'
import { SideBar } from '@/components/dashboard-admin/sidebar'
import { DashboardShell } from '@/components/dashboard/shell'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <DashboardShell>
      <SideBar />
      <Header user={user} />
    </DashboardShell>
  )
}
