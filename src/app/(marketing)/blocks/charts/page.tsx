import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AreaChartComponent from '@/components/charts/area-chart'
import { OverviewChart } from '@/components/charts/bar-chart'
import { SalesProductsVisitsBarChart } from '@/components/charts/bar-group-chart'
import { OverviewGridChart } from '@/components/charts/line-chart'

export const metadata = {
  title: 'Charts Components Page',
}

export default function ChartsBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto space-y-16 pt-20 text-center">
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
