import React from 'react'
import Breadcrumb from './../sections/Breadcrumb'
import { Link, useHistory } from 'react-router-dom'
import { checkoutSchema } from '../validationShemas/YupValidationSchemas'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddressAction } from '../../redux/actions/cartActions'

const CheckoutScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // Get Product Shipping address from local storage by redux
  const { cart } = useSelector((state) => state)
  const { cartItems, shippingAddress } = cart
  // Calculate Price and store price in cart object
  cart.itemsPrice = Number(
    cartItems
      .reduce((prev, current) => prev + current.price * Number(current.qty), 0)
      .toFixed(2)
  )
  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 15
  cart.taxPrice = Number((cart.itemsPrice * 0.15).toFixed(2))
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice

  // Handle Form Data
  const formik = useFormik({
    initialValues: {
      fullName: shippingAddress.fullName || '',
      companyName: shippingAddress.companyName || '',
      address: shippingAddress.address || '',
      country: shippingAddress.country || '',
      postalCode: shippingAddress.postalCode || '',
      mobile: shippingAddress.mobile || '',
      email: shippingAddress.email || '',
      acceptTerms: false,
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      const { acceptTerms, ...data } = values
      dispatch(saveShippingAddressAction(data))
      const { cartSidebar, ...orderData } = cart
      orderData.shippingAddress = data
      history.push('/order')
    },
  })
  const { handleChange, handleSubmit, errors, values } = formik
  // Handle Cart Data

  return (
    <div>
      <Breadcrumb />
      <form
        onSubmit={handleSubmit}
        className='container grid grid-cols-12 pb-16 pt-4 gap-4 items-start'
      >
        <div className='col-span-12 md:col-span-8 p-4 border border-gray-200 rounded  text-xs lg:text-sm'>
          <h3 className='text-base lg:text-lg font-bold text-gray-700 mb-4 uppercase'>
            Proceed To Checkout
          </h3>
          {/* Checkout Fields */}
          <div className='space-y-3'>
            {/* Name && Email */}
            <div className=' grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 space-y-2 lg:space-y-0'>
              <div className='space-y-2'>
                <label>
                  Full Name <span className='text-primary'>*</span>
                </label>
                <input
                  type='text'
                  name='fullName'
                  onChange={handleChange}
                  value={values.fullName}
                  required
                  className={`input-box ${
                    errors && !errors.fullName && `success`
                  }`}
                />
                {values.fullName && errors && errors.fullName && (
                  <span className='text-xs text-primary font-medium'>
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div className='space-y-2'>
                <label>
                  Email <span className='text-primary'>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  required
                  className={`input-box ${
                    errors && !errors.email && `success`
                  }`}
                />
                {values.email && errors && errors.email && (
                  <span className='text-xs text-primary font-medium'>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            {/* Mobile && POstalCode */}
            <div className=' grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 space-y-2 lg:space-y-0'>
              <div className='space-y-2'>
                <label>
                  Phone Number <span className='text-primary'>*</span>
                </label>
                <input
                  type='text'
                  name='mobile'
                  onChange={handleChange}
                  value={values.mobile}
                  required
                  className={`input-box ${
                    errors && !errors.mobile && `success`
                  }`}
                />
                {values.mobile && errors && errors.mobile && (
                  <span className='text-xs text-primary font-medium'>
                    {errors.mobile}
                  </span>
                )}
              </div>
              <div className='space-y-2'>
                <label>
                  Postal Code <span className='text-primary'>*</span>
                </label>
                <input
                  type='text'
                  name='postalCode'
                  value={values.postalCode}
                  onChange={handleChange}
                  required
                  className={`input-box ${
                    errors && !errors.postalCode && `success`
                  }`}
                />
                {values.postalCode && errors && errors.postalCode && (
                  <span className='text-xs text-primary font-medium'>
                    {errors.postalCode}
                  </span>
                )}
              </div>
            </div>
            <div className='space-y-2'>
              <label>
                Street Address <span className='text-primary'>*</span>
              </label>
              <input
                type='text'
                name='address'
                value={values.address}
                onChange={handleChange}
                required
                className={`input-box ${
                  errors && !errors.address && `success`
                }`}
              />
              {values.address && errors && errors.address && (
                <span className='text-xs text-primary font-medium'>
                  {errors.address}
                </span>
              )}
            </div>
            <div className='space-y-2'>
              <label>
                Country/Region <span className='text-primary'>*</span>
              </label>
              <input
                type='text'
                name='country'
                value={values.country}
                onChange={handleChange}
                required
                className={`input-box ${
                  errors && !errors.country && `success`
                }`}
              />
              {values.country && errors && errors.country && (
                <span className='text-xs text-primary font-medium'>
                  {errors.country}
                </span>
              )}
            </div>
            <div className='space-y-2'>
              <label>Company Name</label>
              <input
                type='text'
                name='companyName'
                value={values.companyName}
                onChange={handleChange}
                className={`input-box ${
                  errors && !errors.companyName && `success`
                }`}
              />
              {values.companyName && errors && errors.companyName && (
                <span className='text-xs text-primary font-medium'>
                  {errors.companyName}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Shipping Details */}
        <div className='col-span-12 md:col-span-4 p-4 border border-gray-200 rounded text-xs lg:text-sm'>
          <h3 className='text-base lg:text-lg font-bold text-gray-700 mb-4 uppercase'>
            Order Summery
          </h3>
          {cartItems.length && (
            <div className='space-y-3'>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className='flex justify-between items-baseline'
                >
                  <div>
                    <h5 className='text-gray-800 font-semibold'>{item.name}</h5>
                    <p className='text-gray-600 text-xs'>${item.price}</p>
                  </div>
                  <p className='text-gray-600 text-xs'>X{item.qty}</p>
                  <p className='text-gray-600 font-semibold'>
                    ${item.qty * item.price}
                  </p>
                </div>
              ))}
              <div className=' flex justify-between border-b border-gray-100 pb-1 uppercase'>
                <p className=''>Subtotal</p>
                <p className='font-semibold'>${cart.itemsPrice}</p>
              </div>
              <div className=' flex justify-between border-b border-gray-100 pb-1 uppercase'>
                <p className=''>Tax</p>
                <p className='font-semibold'>${cart.taxPrice}</p>
              </div>
              <div className=' flex justify-between border-b border-gray-100 pb-1 uppercase'>
                <p className=''>Shipping</p>
                <p className='font-semibold'>
                  {cart.shippingPrice ? `$${cart.shippingPrice}` : `Free`}
                </p>
              </div>
              <div className=' flex justify-between font-bold uppercase'>
                <p className=''>Total </p>
                <p className=''>${cart.totalPrice}</p>
              </div>
              <div className='agree-terms-conditions'>
                <input
                  id='agree'
                  type='checkbox'
                  name='acceptTerms'
                  onChange={handleChange}
                  required
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3'
                />
                <label
                  for='agree'
                  className='text-gray-600 cursor-pointer ml-3 select-none text-sm'
                >
                  Agree to checkout
                  <Link to='/' className='text-primary'>
                    terms & conditions
                  </Link>
                </label>
                <div>
                  {!values.acceptTerms && errors.acceptTerms && (
                    <span className='text-xs text-primary font-medium'>
                      {errors.acceptTerms}
                    </span>
                  )}
                </div>
              </div>
              <button
                type='submit'
                className='bg-primary border border-primary hover:text-primary hover:bg-transparent rounded text-white block w-full text-center py-2 transition duration-300'
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default CheckoutScreen
