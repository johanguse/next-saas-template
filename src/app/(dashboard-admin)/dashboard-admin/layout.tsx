import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'

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

  return <AdminPanelLayout>{children}</AdminPanelLayout>
}
