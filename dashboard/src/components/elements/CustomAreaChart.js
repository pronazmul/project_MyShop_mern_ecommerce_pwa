import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'January',
    seals: 1000,
  },
  {
    name: 'Fabuary',
    seals: 2000,
  },
  {
    name: 'March',
    seals: 900,
  },
  {
    name: 'April',
    seals: 2780,
  },
  {
    name: 'May',
    seals: 1890,
  },
  {
    name: 'June',
    seals: 2000,
  },
  {
    name: 'August',
    seals: 1100,
  },
  {
    name: 'September',
    seals: 5000,
  },
  {
    name: 'October',
    seals: 3490,
  },
]

const CustomAreaChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='seals'
            stroke='#8884d8'
            fill='#8884d8'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomAreaChart
