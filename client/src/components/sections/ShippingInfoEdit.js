import React from 'react'
import { useFormik } from 'formik'
import { checkoutSchema } from '../validationShemas/YupValidationSchemas'
import { useDispatch } from 'react-redux'
import { saveShippingAddressAction } from '../../redux/actions/cartActions'

const ShippingInfoEdit = ({ setEditShipping, shipping }) => {
  const dispatch = useDispatch()
  // Handle Form Data
  const formik = useFormik({
    initialValues: {
      fullName: shipping.fullName,
      companyName: shipping.companyName,
      address: shipping.address,
      country: shipping.country,
      postalCode: shipping.postalCode,
      mobile: shipping.mobile,
      email: shipping.email,
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      dispatch(saveShippingAddressAction(values))
      setEditShipping(false)
    },
  })
  const { handleChange, handleSubmit, errors, values } = formik
  return (
    <div className='w-full lg:w-3/4'>
      <form onSubmit={handleSubmit} className='space-y-2 text-xs lg:text-sm'>
        <div className='space-y-2'>
          {/* Name && Email */}
          <div className=' grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 space-y-2 lg:space-y-0'>
            <div className='space-y-2'>
              <label>
                Full Name <span className='text-primary'>*</span>
              </label>
              <input
                type='text'
                name='fullName'
                value={values.fullName}
                onChange={handleChange}
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
                value={values.email}
                onChange={handleChange}
                className={`input-box ${errors && !errors.email && `success`}`}
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
                value={values.mobile}
                onChange={handleChange}
                className={`input-box ${errors && !errors.mobile && `success`}`}
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
              className={`input-box ${errors && !errors.address && `success`}`}
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
              className={`input-box ${errors && !errors.country && `success`}`}
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
        {/* Submit or Cancel Button */}
        <div className='space-x-2 flex'>
          <button
            type='button'
            onClick={() => setEditShipping(false)}
            className='border border-gray-100 px-6 rounded bg-gray-400 text-white py-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='border border-primary px-6 rounded bg-primary text-white py-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default ShippingInfoEdit
