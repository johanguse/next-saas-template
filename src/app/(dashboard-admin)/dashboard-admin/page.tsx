import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard-admin/page'
import { ModeToggle } from '@/components/layout/mode-toggle'

export const metadata = {
  title: 'Dashboard',
}

export default async function MainDashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Home</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <ModeToggle />
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <p>tesssste</p>
      </DashboardPageMain>
    </DashboardPage>
  )
}
