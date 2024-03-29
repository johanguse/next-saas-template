import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import AreaChartComponent from '@/components/charts/area-chart'
import { OverviewChart } from '@/components/charts/bar-chart'
import { SalesProductsVisitsBarChart } from '@/components/charts/bar-group-chart'
import { OverviewGridChart } from '@/components/charts/line-chart'
import { BlockTitle } from '@/components/layout/main-title'

export const metadata = {
  title: 'Charts Components Page',
}

export default function ChartsBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="pt-20 text-center">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h1" className="text-xl">
            Charts
          </BlockTitle.Header>
          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SalesProductsVisitsBarChart />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <AreaChartComponent />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewGridChart />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
