import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ categories }) => {
  return (
    <>
      {categories.map((item) => (
        <div className='relative rounded-md overflow-hidden group'>
          <img src={item.img} alt={item.name} className='w-full h-full' />
          <Link
            to={item.path}
            className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white  group-hover:bg-opacity-50 transition duration-300 font-bold font-roboto text-xs lg:text-sm'
          >
            {item.name}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Category
