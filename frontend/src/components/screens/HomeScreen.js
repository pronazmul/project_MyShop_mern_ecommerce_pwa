import React, { useEffect } from 'react'
import Addvertise from '../sections/Addvertise'
import Category from '../sections/Category'
import Feature from '../sections/Feature'
import Product from './../sections/Product'
import {
  dummyFeatures as features,
  shopByCategory as categories,
} from '../dummyData/data'
import SliderSlick from '../sections/SliderSlick'
import { useDispatch, useSelector } from 'react-redux'
import { productListAction } from './../../redux/actions/productActions'
import Loader from '../elements/Loader'
import ErrorMessage from '../elements/ErrorMessage'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { error, loading, products } = useSelector((state) => state.productList)
  const category = [...new Set(products.map((item) => item.category))]

  // Side Effects
  useEffect(() => {
    dispatch(productListAction())
  }, [])

  return (
    <div className=''>
      {/* Slider */}
      <div className='container items-center'>
        {/* <Bannar /> */}
        <SliderSlick />
      </div>
      {/* Feature */}
      <div className='py-8 lg:py-10 container items-center'>
        <div className='w-9/12 lg:w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6'>
          <Feature features={features} />
        </div>
      </div>
      {/* Category */}
      <div className='container pb-8 lg:pb-10'>
        <h1 className='uppercase text-base lg:text-lg font-bold text-gray-800 mb-4'>
          Shop By Category
        </h1>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
          <Category categories={categories} />
        </div>
      </div>
      {/* Shop By Collections */}
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        category.map((item) => (
          <div key={item} className='container pb-8 lg:pb-10'>
            <h1 className='uppercase text-base lg:text-lg font-bold text-gray-800 mb-6'>
              {`${item}'S COLLECTION`}
            </h1>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6'>
              <Product product={products.filter((p) => p.category === item)} />
            </div>
          </div>
        ))
      )}
      {/* Advertise Bannar */}
      <div className='container pb-8 lg:pb-10'>
        <Addvertise />
      </div>
    </div>
  )
}

export default HomeScreen
