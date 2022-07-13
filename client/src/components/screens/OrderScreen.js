import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import PaymentSuccessModal from '../elements/PaymentSuccessModal'

const OrderScreen = () => {
  const location = useLocation()
  const redirect = location.search.split('=')[1]

  const {
    cartItems,
    shippingAddress,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = useSelector((state) => state.cart)

  const { fullName, address, country, postalCode, mobile, email, companyName } =
    shippingAddress

  return (
    <div>
      {/* Payment Successfull Modal */}
      {redirect && redirect === 'success' && (
        <PaymentSuccessModal success={true} />
      )}
      <div className='container grid grid-cols-12 pb-16 py-6 gap-4 items-start'>
        {/* Order Details */}
        <div className='col-span-12 md:col-span-8 p-4 border border-gray-200 rounded  text-xs lg:text-sm'>
          <div className='border-b pb-1 border-gray-100'>
            <h3 className='text-base lg:text-lg font-black text-gray-600 pr-2'>
              Order ID : 09328KJASWEIO
            </h3>
          </div>
          {/* Shipment Information */}
          <div className='pl-10'>
            <div className='flex py-6 relative'>
              <div className='absolute -left-10'>
                <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
                  <i className='fas fa-shipping-fast'></i>
                </span>
              </div>
              <div className='border-b-2 pb-1 border-gray-200 w-full'>
                <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
                  Shipping infomation
                </h3>
              </div>
            </div>
            <div className='w-full text-gray-600 text-sm space-y-1'>
              {/* Address */}
              <div className='flex flex-col sm:flex-row sm:justify-between'>
                <span className='w-1/3 font-black'>Name:</span>
                <span className='w-full'>{fullName}</span>
              </div>
              <div className='flex flex-col sm:flex-row sm:justify-between'>
                <div className='w-1/3 font-black'>Address:</div>
                <div className='w-full flex flex-col'>
                  <span>{`${address} , ${postalCode} ,${country} ,`}</span>
                  <span>{companyName}</span>
                  <span>{`${mobile} , ${email}`}</span>
                </div>
              </div>
              {/* Shipping && Delivery Status */}
              <div className='flex '>
                <span className='w-1/3 font-black '>Payment:</span>
                <div className='w-full'>
                  <span className='text-xs bg-red-500 text-white rounded-lg font-medium py-0.5 px-2'>
                    Not Paid
                  </span>
                </div>
              </div>
              <div className='flex '>
                <span className='w-1/3 font-black '>Shipment:</span>
                <div className='w-full'>
                  <span className='text-xs bg-red-500 text-white rounded-lg font-medium py-0.5 px-2'>
                    Not Shipped
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Product Details */}
          <div className='pl-10'>
            <div className='flex py-6 relative'>
              <div className='absolute -left-10'>
                <span className='bg-primary h-8 w-8 rounded-full text-white flex justify-center items-center'>
                  <i className='fas fa-dolly'></i>
                </span>
              </div>
              <div className='border-b-2 pb-1 border-gray-200 w-full'>
                <h3 className='text-sm lg:text-base font-black text-gray-600 uppercase'>
                  Product Details
                </h3>
              </div>
            </div>

            <div className='w-full text-gray-600 text-sm space-y-1'>
              {cartItems &&
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className='flex items-center justify-between p-2 md:p-4 shadow gap-2 md:gap-4 rounded'
                  >
                    <div className='w-12'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className=' rounded shadow-sm w-full'
                      />
                    </div>
                    <div className=''>
                      <h3 className='uppercase text-xs md:text-sm font-bold text-gray-600'>
                        {item.name}
                      </h3>
                    </div>
                    <p className=' text-gray-400 font-bold text-xs'>
                      X{item.qty}
                    </p>
                    <p className=' text-primary font-bold text-sm'>
                      ${item.price}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className='col-span-12 md:col-span-4 p-4 border border-gray-200 rounded text-xs lg:text-sm'>
          <h3 className='text-base lg:text-lg font-bold text-gray-700 mb-4 capitalize'>
            Make Payment
          </h3>
          <div className='space-y-3'>
            <div className=' flex justify-between border-b border-gray-100 pb-1 uppercase'>
              <p className=''>Subtotal</p>
              <p className='font-semibold'>${itemsPrice}</p>
            </div>
            <div className=' flex justify-between border-b border-gray-100 pb-1 uppercase'>
              <p className=''>Tax</p>
              <p className='font-semibold'>${taxPrice}</p>
            </div>
            <div className=' flex justify-between border-b border-gray-100 pb-1 uppercase'>
              <p className=''>Shipping</p>
              <p className='font-semibold'>
                {shippingPrice ? `$${shippingPrice}` : `Free`}
              </p>
            </div>
            <div className=' flex justify-between font-bold uppercase'>
              <p className=''>Total </p>
              <p className=''>${totalPrice}</p>
            </div>

            <a
              href='https://mydevshop.herokuapp.com/api/payment'
              className='bg-primary border border-primary hover:text-primary hover:bg-transparent rounded text-white block w-full text-center py-2 transition duration-300'
            >
              Pay with SSLCommerz
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderScreen
