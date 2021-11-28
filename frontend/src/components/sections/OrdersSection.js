import React from 'react'

const OrdersSection = () => {
  return (
    <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
      {/* Order Title */}
      <div className='flex items-baseline border-b pb-1 border-gray-100'>
        <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
          Orders
        </h3>
        <span className='text-xs lg:text-sm text-gray-500'>
          Your order history in My Shop
        </span>
      </div>
      {/* Filter Field */}
      <div className='w-full flex py-4 justify-between'>
        <div className='w-2/6 lg:w-1/6 relative'>
          <span className='absolute text-sm text-gray-300 right-2 top-1'>
            <i className='fas fa-search'></i>
          </span>
          <input
            type='text'
            placeholder='Search...'
            className='input-box py-1 pl-1 pr-8'
          />
        </div>
        <div className=''>
          <select
            className=' rounded text-xs lg:text-sm text-gray-600 py-1 border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
            name='sortBy'
          >
            <option value='all'>All</option>
            <option value='pending'>Pending</option>
            <option value='confirmed'>Confirmed</option>
            <option value='processing'>Processing</option>
            <option value='Shipped'>Shipped</option>
            <option value='cancelled'>Cancelled</option>
          </select>
        </div>
      </div>
      {/* No Data Found */}
      <div className=' w-full py-8 flex flex-col items-center'>
        <span className='bg-gray-400 h-12 w-12 rounded-full text-white flex justify-center items-center mb-4'>
          <i className='far fa-folder-open'></i>
        </span>
        <span className='text-sm lg:text-base font-black text-gray-600'>
          Sorry! No Orders Found
        </span>
        <span className='text-xs lg:text-sm text-gray-500'>
          May be go back or try something else.
        </span>
      </div>
    </div>
  )
}

export default OrdersSection
