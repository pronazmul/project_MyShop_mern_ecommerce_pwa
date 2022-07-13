import React from 'react'

const Feature = ({ features }) => {
  return (
    <>
      {features.map((feature) => (
        <div className='flex justify-center items-center gap-5 border border-primary rounded-sm px-3 py-3 lg:py-5'>
          <img
            src={feature.image}
            alt='Shipping'
            className='w-12 lg:w-16 h-12 lg:h-16 object-contain'
          />
          <div className=''>
            <h4 className='font-bold capitalize text-base lg:text-lg'>
              {feature.title}
            </h4>
            <p className=' text-gray-500 text-sm'>{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Feature
