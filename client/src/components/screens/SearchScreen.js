import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productSearchAction } from '../../redux/actions/productActions'
import ErrorMessage from '../elements/ErrorMessage'
import Loader from '../elements/Loader'
import Product from './../sections/Product'
import { Link } from 'react-router-dom'

const SearchScreen = () => {
  const { product } = useParams()
  const dispatch = useDispatch()
  const { error, loading, products } = useSelector(
    (state) => state.searchProducts
  )

  useEffect(() => {
    if (product) {
      dispatch(productSearchAction(product))
    }
  }, [product])
  return (
    <div className='container grid grid-cols-12 py-8 gap-2'>
      {loading ? (
        <div className='col-span-12'>
          {' '}
          <Loader />
        </div>
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        products && (
          <>
            {/* Find & filter Section */}
            <div className='col-span-12 rounded-md shadow py-3 px-4 flex justify-between items-baseline text-gray-500 text-sm lg:text-base font-semibold'>
              <div className=''>
                {products.length} Proucts found for "{product}"
              </div>
              {products.length ? (
                <div className='flex items-center space-x-3'>
                  <p className=''>Sort By:</p>
                  <select
                    className=' rounded text-xs lg:text-sm text-gray-600 py-1 border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
                    name='sortBy'
                  >
                    <option value=''>Default</option>
                    <option value='low-heigh'>Price low-heigh</option>
                    <option value='heigh-low'>Price heigh-low</option>
                  </select>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* Products Section */}

            {products.length ? (
              <div className='col-span-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                <Product product={products} />
              </div>
            ) : (
              <div className='col-span-12 max-w-sm mx-auto  p-6  flex flex-col items-center'>
                <img
                  className='w-48 lg:w-72'
                  src='https://i.ibb.co/z4wPspj/Logo-Makr-5-Lj8-As.png'
                ></img>
                <Link
                  className='font-bold text-sm uppercase text-primary mt-4'
                  to='/'
                >
                  Back to Home
                </Link>
              </div>
            )}
          </>
        )
      )}
    </div>
  )
}

export default SearchScreen
