import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CustomDropzoneUI from '../elements/CustomDropzoneUI'
import { proudctAddSchema } from '../validationShemas/YupValidationSchemas'
import Loader from './../elements/Loader'
import ErrorMessage from './../elements/ErrorMessage'
import ToastNotification from './../elements/ToastNotification'

const AddProducts = () => {
  const [submitHandler, setSubmitHandler] = useState({
    success: false,
    loading: false,
    error: '',
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      brand: '',
      category: '',
      price: '',
      countInStock: '',
      description: '',
      images: [],
    },
    validationSchema: proudctAddSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      setSubmitHandler({ ...submitHandler, loading: true })
      try {
        const images = values.images.map((item) => item.file)
        let formData = new FormData()
        for (let i = 0; i < images.length; i++) {
          formData.append('images', images[i])
        }
        formData.append('name', values.name)
        formData.append('brand', values.brand)
        formData.append('category', values.category)
        formData.append('price', values.price)
        formData.append('countInStock', values.countInStock)
        formData.append('description', values.description)
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        const { data } = await axios.post(
          'http://localhost:5000/api/products',
          formData,
          config
        )
        resetForm()
        setSubmitHandler({ ...submitHandler, success: true, loading: false })
        console.log(data)
      } catch (error) {
        setSubmitHandler({
          ...submitHandler,
          success: false,
          error: error.msg,
          loading: false,
        })
      }
    },
  })
  const { handleChange, handleSubmit, errors, values, setFieldValue } = formik

  const useEffect = (() => {}, [submitHandler.success])

  return (
    <div className='m-2'>
      {/* Toast Notification */}
      {submitHandler.success && (
        <ToastNotification color='green' title='Success' show={true}>
          Product Added Successfully
        </ToastNotification>
      )}
      <div className='p-4 space-y-4'>
        <div className='flex space-x-4 items-baseline'>
          <span className='bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center'>
            <i className='fas fa-luggage-cart' />
          </span>
          <h3 className='text-gray-500 text-sm lg:text-base font-black uppercase'>
            Add New Product
          </h3>
        </div>
        <div className='bg-white p-4 shadow rounded-lg'>
          {submitHandler.error ? (
            <ErrorMessage>{submitHandler.error}</ErrorMessage>
          ) : submitHandler.loading ? (
            <Loader />
          ) : (
            <form
              onSubmit={handleSubmit}
              className=' text xs lg:text-sm text text-gray-600 space-y-2'
            >
              <div className='space-y-2'>
                <label className='block font-semibold'>Product Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Product Name'
                  onChange={handleChange}
                  className={`input-box placeholder-gray-300 ${
                    errors && !errors.name && 'success'
                  }`}
                  required
                />
                {values.name && errors && errors.name && (
                  <span className='text-xs text-red-500 font-medium'>
                    {errors.name}
                  </span>
                )}
              </div>
              <div className='lg:flex lg:justify-between lg:space-x-3 lg:items-baseline w-full space-y-2'>
                <div className='space-y-2 w-full'>
                  <label className='block font-semibold'>Product Brand</label>
                  <input
                    type='text'
                    name='brand'
                    placeholder='Product Brand'
                    onChange={handleChange}
                    className={`input-box placeholder-gray-300 ${
                      errors && !errors.brand && 'success'
                    }`}
                    required
                  />
                  {values.brand && errors && errors.brand && (
                    <span className='text-xs text-red-500 font-medium'>
                      {errors.brand}
                    </span>
                  )}
                </div>
                <div className='space-y-2 w-full'>
                  <label className='block font-semibold'>
                    Product Category
                  </label>
                  <input
                    type='text'
                    name='category'
                    placeholder='Product Brand'
                    onChange={handleChange}
                    className={`input-box placeholder-gray-300 ${
                      errors && !errors.category && 'success'
                    }`}
                    required
                  />
                  {values.category && errors && errors.category && (
                    <span className='text-xs text-red-500 font-medium'>
                      {errors.category}
                    </span>
                  )}
                </div>
              </div>
              <div className='lg:flex lg:justify-between lg:space-x-3 lg:items-baseline w-full space-y-2'>
                <div className='space-y-2 w-full'>
                  <label className='block font-semibold'>Product Price</label>
                  <input
                    type='text'
                    name='price'
                    placeholder='Product Price'
                    onChange={handleChange}
                    className={`input-box placeholder-gray-300 ${
                      errors && !errors.price && 'success'
                    }`}
                    required
                  />
                  {values.price && errors && errors.price && (
                    <span className='text-xs text-red-500 font-medium'>
                      {errors.price}
                    </span>
                  )}
                </div>
                <div className='space-y-2 w-full'>
                  <label className='block font-semibold'>In Stock</label>
                  <input
                    type='text'
                    name='countInStock'
                    placeholder='Product in Stock'
                    onChange={handleChange}
                    className={`input-box placeholder-gray-300 ${
                      errors && !errors.countInStock && 'success'
                    }`}
                    required
                  />
                  {values.countInStock && errors && errors.countInStock && (
                    <span className='text-xs text-red-500 font-medium'>
                      {errors.countInStock}
                    </span>
                  )}
                </div>
              </div>
              <div className='space-y-2'>
                <label className='block font-semibold'>
                  Product Description
                </label>
                <textarea
                  name='description'
                  placeholder='Product Description'
                  onChange={handleChange}
                  className={`input-box placeholder-gray-300 ${
                    errors && !errors.description && 'success'
                  }`}
                  required
                />
                {values.description && errors && errors.description && (
                  <span className='text-xs text-red-500 font-medium'>
                    {errors.description}
                  </span>
                )}
              </div>
              <div className='space-y-4'>
                <h3 className=' font-black text-gray-600'>
                  Upload Multiple Products Images
                </h3>
                <div className=''>
                  <CustomDropzoneUI
                    fileName='images'
                    files={values.images}
                    setFiles={setFieldValue}
                  />
                  {errors &&
                    Object.keys(errors).length === 1 &&
                    errors.images && (
                      <span className='text-xs text-red-500 font-medium'>
                        {errors.images}
                      </span>
                    )}
                </div>
              </div>
              <div className='max-w-xs mx-auto pt-5'>
                <button
                  type='submit'
                  className='border border-primary px-6 rounded bg-primary text-white py-2 hover:bg-transparent hover:text-gray-600 font-semibold transition duration-300 w-full'
                >
                  Add Product
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddProducts
