import React from 'react'

const ReviewSection = () => {
  return (
    <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
      {/* Order Title */}
      <div className='flex items-baseline border-b pb-1 border-gray-100'>
        <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
          Reviews
        </h3>
        <span className='text-xs lg:text-sm text-gray-500'>
          Your review history in MyShop
        </span>
      </div>
      {/* No Data Found */}
      <div className=' w-full py-8 flex flex-col items-center'>
        <span className='bg-gray-400 h-12 w-12 rounded-full text-white flex justify-center items-center mb-4'>
          <i className='far fa-folder-open'></i>
        </span>
        <span className='text-sm lg:text-base font-black text-gray-600'>
          Sorry! No Reviews Found
        </span>
        <span className='text-xs lg:text-sm text-gray-500'>
          May be go back or try something else.
        </span>
      </div>
    </div>
  )
}

export default ReviewSection
