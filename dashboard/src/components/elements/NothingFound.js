import React from 'react'

const NothingFound = () => {
  return (
    <div class='w-full h-full'>
      <div className='max-w-md mx-auto my-12 text-gray-600 text-center space-y-3'>
        <span className='text-5xl text-primary'>
          <i className='fas fa-shopping-basket' />
        </span>
        <h3 className='font-bold text-lg'>Nothing Matched Found</h3>
        <h3 className='text-sm'>Search Again</h3>
      </div>
    </div>
  )
}

export default NothingFound
