import React from 'react'
import { adminSummery } from '../data'
import CustomAreaChart from '../elements/CustomAreaChart'
import CustomLineChart from '../elements/CustomLineChart'

const Dashboard = () => {
  return (
    <div className='m-4 space-y-6 '>
      {/* Application Overview */}
      <div className=''>
        <h3 className='text-lg lg:text-2xl font-black text-gray-500'>
          Welcome Admin
        </h3>
      </div>

      {/* Overview */}
      <div className='space-y-4'>
        <div className='border-b pb-1 border-gray-200'>
          <h3 className='text-sm lg:text-lg font-black text-gray-500 pr-2'>
            Overview
          </h3>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-3 lg:gap-6'>
          {adminSummery &&
            adminSummery.map((item) => (
              <div
                key={item.id}
                className='bg-white p-4 shadow rounded-lg flex space-x-6'
              >
                <div className='text-primary opacity-70 bg-red-100 w-12 h-12 rounded-full flex justify-center items-center'>
                  <i className={item.icon}></i>
                </div>
                <div className='text-base'>
                  <p className='font-bold text-gray-600'>{item.title}</p>
                  <p className='text-gray-400'>{item.subtitle}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Application Chart */}
      <div className='space-y-4'>
        <div className='border-b pb-1 border-gray-200'>
          <h3 className='text-sm lg:text-lg font-black text-gray-500 pr-2'>
            Monthly Sales Report 2021
          </h3>
        </div>
        <div className='grid grid-cols-1 gap-3'>
          <div className='areachart'>
            <CustomAreaChart />
          </div>
          <div className='linechart'>
            <CustomLineChart />
          </div>
          <div className='stackedchart'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
