import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard-admin/page'
import { CardSkeleton } from '@/components/shared/card-skeleton'

export default function DashboardLoading() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Loading...</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </DashboardPageMain>
    </DashboardPage>
  )
}
