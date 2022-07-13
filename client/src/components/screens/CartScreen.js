import React, { useState } from 'react'
import Breadcrumb from './../sections/Breadcrumb'
import { Link } from 'react-router-dom'

const CartScreen = () => {
  const [qty, setQty] = useState(1)
  return (
    <div>
      <Breadcrumb />
      <div className='container grid grid-cols-12 pb-16 pt-4 gap-4 items-start'>
        {/* Checkout Form */}
        <div className=' col-span-8 p-4 border border-gray-200 rounded '>
          <h3 className='text-lg font-bold text-gray-700 mb-2 uppercase'>
            Shipping Cart
          </h3>
          <div className=' space-y-6 divide-y divide-gray-200'>
            <div className='flex items-center justify-between p-4 gap-4'>
              <div className='w-28 flex-shrink-0'>
                <img
                  src='/images/product/bed.webp'
                  alt='Bed'
                  className=' rounded shadow-sm w-full'
                />
              </div>
              <div className='w-1/3'>
                <h3 className='uppercase text-xl font-bold text-gray-800'>
                  Otobi Hi Comfort Bed
                </h3>
                <p className='text-sm text-gray-500 font-semibold'>
                  Availibity: <span className='text-green-500'>In Stock</span>
                </p>
              </div>
              <p className=' text-primary font-bold text-lg'>$320</p>
              <div className='flex border border-gray-300 w-max text-gray-600 divide-x divide-gray-300 rounded'>
                <div
                  className=' h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                  onClick={() => qty > 0 && setQty(qty - 1)}
                >
                  -
                </div>
                <div className=' h-8 w-8 text-sm flex items-center justify-center '>
                  {qty}
                </div>
                <div
                  className=' h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </div>
              </div>
              <p className=' text-gray-600 font-lg cursor-pointer hover:text-primary transition duration-300'>
                <i className='fas fa-trash'></i>
              </p>
            </div>
            <div className='flex items-center justify-between p-4 gap-4'>
              <div className='w-28 flex-shrink-0'>
                <img
                  src='/images/product/bed.webp'
                  alt='Bed'
                  className=' rounded shadow-sm w-full'
                />
              </div>
              <div className='w-1/3'>
                <h3 className='uppercase text-xl font-bold text-gray-800'>
                  Otobi Hi Comfort Bed
                </h3>
                <p className='text-sm text-gray-500 font-semibold'>
                  Availibity: <span className='text-green-500'>In Stock</span>
                </p>
              </div>
              <p className=' text-primary font-bold text-lg'>$320</p>
              <div className='flex border border-gray-300 w-max text-gray-600 divide-x divide-gray-300 rounded'>
                <div
                  className=' h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                  onClick={() => qty > 0 && setQty(qty - 1)}
                >
                  -
                </div>
                <div className=' h-8 w-8 text-sm flex items-center justify-center '>
                  {qty}
                </div>
                <div
                  className=' h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </div>
              </div>
              <p className=' text-gray-600 font-lg cursor-pointer hover:text-primary transition duration-300'>
                <i className='fas fa-trash'></i>
              </p>
            </div>
          </div>
        </div>
        {/* Shipping Details */}
        <div className=' col-span-4 p-4 border border-gray-200 rounded'>
          <h3 className='text-lg font-bold text-gray-700 mb-6 uppercase'>
            Subtotal (02) items
          </h3>
          <div className='space-y-5'>
            <div className=' flex justify-between space-x-3'>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='input-box'
                  placeholder='Enter Voucher Code'
                />
              </div>
              <div className='w-1/4'>
                <button className='w-full-btn'>Apply</button>
              </div>
            </div>

            <div className=' flex justify-between font-bold uppercase'>
              <p className=''>Total </p>
              <p className=''>$335</p>
            </div>

            <a
              href='#'
              className='bg-primary border border-primary hover:text-primary hover:bg-transparent rounded text-white block w-full text-center py-2 transition duration-300'
            >
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
