import { Button } from '@/components/ui/button'

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard-admin/page'
import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Payments</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any content yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Fake button</Button>
        </EmptyPlaceholder>
      </DashboardPageMain>
    </DashboardPage>
  )
}
