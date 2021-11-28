import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ShippingInfoEdit from './ShippingInfoEdit'

const ShippingInfo = () => {
  const [editShipping, setEditShipping] = useState(false)
  const { shippingAddress } = useSelector((state) => state.cart)

  return (
    <>
      <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
        {/* Section Header */}
        <div className='flex items-baseline border-b pb-1 border-gray-100'>
          <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
            Shipping Information
          </h3>
          <span className='text-xs lg:text-sm text-gray-500'>
            Keep MyShop updated about your postal code so that you do not miss
            any shipping gift.
          </span>
        </div>
        <div className='shipping-info pl-10'>
          {/* Shipping Information Title */}
          <div className='flex py-6 relative'>
            <div className='absolute -left-10'>
              <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
                <i className='fas fa-shipping-fast'></i>
              </span>
            </div>
            <div className='border-b-2 pb-1 border-gray-200 w-full flex justify-between'>
              <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
                Shipping Information
              </h3>
              {!editShipping && (
                <button
                  onClick={() => setEditShipping(true)}
                  className='  text-gray-500 font-semibold border border-primary px-4 py-1 rounded text-sm hover:bg-primary hover:text-white transition duration-300'
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          {/* Switch Shipping Screen to Shipping Edit Screen */}
          {!editShipping ? (
            <div className='w-full lg:w-3/4 text-gray-600 text-sm space-y-2'>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Full Name</span>
                <span className='w-full'>{shippingAddress.fullName}</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Company Name</span>
                <span className='w-full'>
                  {shippingAddress.companyName
                    ? shippingAddress.companyName
                    : 'N/A'}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Address</span>
                <span className='w-full'>{shippingAddress.address}</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Country</span>
                <span className='w-full'>{shippingAddress.country}</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Postal Code</span>
                <span className='w-full'>{shippingAddress.postalCode}</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Phone Number</span>
                <span className='w-full'>{shippingAddress.mobile}</span>
              </div>
              <div className='flex justify-between'>
                <span className='w-full font-black'>Email Address</span>
                <span className='w-full'>{shippingAddress.email}</span>
              </div>
            </div>
          ) : (
            <ShippingInfoEdit
              setEditShipping={setEditShipping}
              shipping={shippingAddress}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ShippingInfo
