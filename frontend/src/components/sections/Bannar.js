import React from 'react'
import { Link } from 'react-router-dom'

const Bannar = () => {
  return (
    <div
      className='object-cover bg-no-repeat bg-top'
      style={{ backgroundImage: "url('/images/bannar.jpg')" }}
    >
      <div className='container py-10 lg:py-14'>
        <h1 className=' text-2xl lg:text-4xl text-gray-800 font-bold capitalize mb-4'>
          best collection for home decoration
        </h1>
        <p className='text-xs  lg:text-base'>
          In publishing and graphic design, Lorem ipsum is a placeholder text{' '}
          <br />
          commonly used to demonstrate.
        </p>
        <div className='mt-6 lg:mt-12'>
          <Link
            to='/shop'
            className='bg-primary border border-primary text-white px-6 lg:px-8 py-2 lg:py-3  rounded-md hover:bg-transparent hover:text-primary transition duration-300 text-xs lg:text-sm font-semibold'
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bannar
