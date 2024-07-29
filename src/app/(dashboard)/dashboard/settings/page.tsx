import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import { DashboardHeader } from '@/components/dashboard/header'
import { ChangeUserNameSection } from '@/components/dashboard/settings/change-name'
import { ChangeRoleAccountSection } from '@/components/dashboard/settings/change-role'
import { DeleteAccountSection } from '@/components/dashboard/settings/delete-account'
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
      <div className="grid gap-10">
        <ChangeUserNameSection user={{ id: user.id, name: user.name || '' }} />
        <ChangeRoleAccountSection user={user} />
        <DeleteAccountSection />
      </div>
    </DashboardShell>
  )
}
