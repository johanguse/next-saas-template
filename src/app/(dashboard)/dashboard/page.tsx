import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import { Button } from '@/components/ui/button-ui'

import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()
  const userRole = user?.role

  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Panel" text="Create and manage content.">
        {(userRole === 'ADMIN' || userRole === 'EDITOR') && (
          <Button variant="tertiary" href="/dashboard-admin">
            Go to admin dashboard
          </Button>
        )}
      </DashboardHeader>

      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any content yet. Start creating content.
        </EmptyPlaceholder.Description>
        <Button variant="secondary">Fake button</Button>
      </EmptyPlaceholder>
    </DashboardShell>
  )
}
