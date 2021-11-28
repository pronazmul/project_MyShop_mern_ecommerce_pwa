import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ErrorMessage from './../elements/ErrorMessage'
import Loader from './../elements/Loader'
import ProductsTable from './ProductsTable'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const [products, setProducts] = useState()
  const [error, setError] = useState()

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        'https://mydevshop.herokuapp.com/api/products'
      )
      setProducts(data)
    } catch (error) {
      setError(error)
    }
  }, [])

  return (
    <div className='m-2'>
      <div className='p-2 space-y-2'>
        {/* All Information Title */}
        <div className='flex relative pl-10 py-3 '>
          <div className='absolute -left-1'>
            <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
              <i className='fas fa-luggage-cart'></i>
            </span>
          </div>
          <div className=' w-full flex justify-between items-baseline'>
            <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
              Product List
            </h3>
            <Link
              to='?tab=add_product'
              className='  text-gray-500 font-semibold border bg-white shadow-md rounded-lg px-4 py-2 text-sm hover:bg-primary hover:text-white transition duration-300'
            >
              Add Product
              <span>
                <i className='fas fa-plus ml-2'></i>
              </span>
            </Link>
          </div>
        </div>
        {/* Products List Table*/}
        <div className=''>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : products ? (
            <ProductsTable data={products} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
