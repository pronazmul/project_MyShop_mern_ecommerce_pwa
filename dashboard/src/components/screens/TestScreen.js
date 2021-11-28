import React, { useState } from 'react'
import { useFormik } from 'formik'

const TestScreen = () => {
  const formik = useFormik({
    initialValues: {
      products: [],
    },
    onSubmit: async (values) => {
      const products = values.products.map((item) => item.file)
      console.log(products)
      // let formData = new FormData()
      // for (let i = 0; i < products.length; i++) {
      //   formData.append('products', products[i])
      // }
      // const config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // }
      // await axios.post('http://localhost:5000/api/upload', formData, config)
    },
  })
  const { handleSubmit, values, setFieldValue } = formik
  return (
    <div className='bg-primary h-screen py-12'>
      <div className='bg-white max-w-lg mx-auto px-8 py-12 rounded-lg shadow-md'>
        <h1 className='text-xl text-center font-bold border-b-2 pb-2'>
          React Custom File Upload Testing
        </h1>
      </div>
    </div>
  )
}
export default TestScreen
