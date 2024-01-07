'use client'

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { capitalize } from '@/lib/utils'

const data = [
  {
    date: 'Jan',
    sales: 5000,
    products: 20150,
    visits: 10000,
  },
  {
    date: 'Feb',
    sales: 6000,
    products: 20200,
    visits: 12000,
  },
  {
    date: 'Mar',
    sales: 7500,
    products: 20250,
    visits: 14000,
  },
  {
    date: 'Apr',
    sales: 5500,
    products: 20180,
    visits: 11000,
  },
  {
    date: 'May',
    sales: 8000,
    products: 20270,
    visits: 16000,
  },
  {
    date: 'Jun',
    sales: 7000,
    products: 20230,
    visits: 13000,
  },
]

const colors = {
  sales: 'bg-red-500',
  products: 'bg-purple-500',
  visits: 'bg-blue-500',
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="flex flex-col gap-4 rounded-md bg-slate-900 p-4">
        <p className="text-medium text-lg text-white">{label}</p>
        {payload.map((entry) => (
          <p
            key={entry.dataKey}
            className={`${colors[entry.dataKey]} rounded px-4 py-2 text-white`}
          >
            {capitalize(entry.name)}:
            <span className="ml-2 font-bold">${entry.value}</span>
          </p>
        ))}
      </div>
    )
  }

  return null
}

export function SalesProductsVisitsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={CustomTooltip} cursor={false} />
        <Bar dataKey="sales" stackId="stack" fill="#EF4444" />
        <Bar dataKey="products" stackId="stack" fill="#8B5CF6" />
        <Bar dataKey="visits" stackId="stack" fill="#3B82F6" />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  )
}
