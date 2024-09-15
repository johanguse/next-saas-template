import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import { DashboardHeader } from '@/components/dashboard/header'
import SettingsComponent from '@/components/dashboard/settings'
import { DashboardShell } from '@/components/dashboard/shell'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <SettingsComponent />
    </DashboardShell>
  )
}
