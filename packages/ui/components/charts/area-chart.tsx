'use client'

import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const productSales = [
  {
    name: 'Jan',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Feb',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Mar',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Apr',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'May',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Jun',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Jul',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Aug',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Sep',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Oct',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Nov',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: 'Dec',
    product1: Math.floor(Math.random() * 500) + 100,
    product2: Math.floor(Math.random() * 500) + 100,
  },
]

interface TooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="flex flex-col gap-4 rounded-md bg-slate-900 p-4">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-blue-400">
          Product 1:<span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 2:<span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    )
  }
  return null
}

const AreaChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={productSales}>
        <YAxis />
        <XAxis dataKey="name" />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
