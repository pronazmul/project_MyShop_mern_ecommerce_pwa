import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'January',
    conversion: 1200,
    sales: 1000,
  },
  {
    name: 'February',
    conversion: 1300,
    sales: 899,
  },
  {
    name: 'March',
    conversion: 2500,
    sales: 1000,
  },
  {
    name: 'April',
    conversion: 1400,
    sales: 1100,
  },
  {
    name: 'May',
    conversion: 2000,
    sales: 1600,
  },
  {
    name: 'June',
    conversion: 2300,
    sales: 2100,
  },
  {
    name: 'July',
    conversion: 3000,
    sales: 2000,
  },
  {
    name: 'August',
    conversion: 2400,
    sales: 1000,
  },
  {
    name: 'September',
    conversion: 3500,
    sales: 2300,
  },
  {
    name: 'October',
    conversion: 3000,
    sales: 2990,
  },
]

const CustomLineChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='conversion'
            stroke='#8884d8'
            strokeDasharray='5 5'
          />
          <Line
            type='monotone'
            dataKey='sales'
            stroke='#82ca9d'
            strokeDasharray='3 4 5 2'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomLineChart
