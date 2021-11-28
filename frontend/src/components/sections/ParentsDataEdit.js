import { useFormik } from 'formik'
import React from 'react'
import { parentsInfoSchema } from '../validationShemas/YupValidationSchemas'

const ParentsDataEdit = ({ editPanelCloser }) => {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      fatherName: '',
      fatherMobile: '',
      motherName: '',
      motherMobile: '',
    },
    validationSchema: parentsInfoSchema,
    onSubmit: (values) => {
      alert(
        JSON.stringify({
          fatherName: values.fatherName,
          fatherMobile: values.fatherMobile,
          motherName: values.motherName,
          motherMobile: values.motherMobile,
        })
      )
    },
  })
  const { handleChange, handleSubmit, errors, values } = formik
  return (
    <div className='w-full lg:w-3/4'>
      <form onSubmit={handleSubmit} className='space-y-2 text-xs lg:text-sm'>
        <div className='lg:flex lg:space-x-3 space-y-2 lg:space-y-0'>
          <div className='lg:flex lg:flex-col space-y-2 w-full'>
            <div className='space-y-2 w-full'>
              <label className='block text-gray-600 font-semibold'>
                Father's Name
              </label>
              <input
                type='text'
                name='fatherName'
                onChange={handleChange}
                placeholder='Father Name'
                className={`input-box ${
                  errors && !errors.fatherName && `success`
                }`}
                required
              />
              {values.fatherName && errors && errors.fatherName && (
                <span className='text-xs text-primary font-medium'>
                  {errors.fatherName}
                </span>
              )}
            </div>
            <div className='space-y-2 w-full'>
              <label className='block text-gray-600 font-semibold'>
                Father's Phone Numebr
              </label>
              <input
                type='text'
                name='fatherMobile'
                onChange={handleChange}
                placeholder='Father Phone No'
                className={`input-box ${
                  errors && !errors.fatherMobile && `success`
                }`}
              />
              {values.fatherMobile && errors && errors.fatherMobile && (
                <span className='text-xs text-primary font-medium'>
                  {errors.fatherMobile}
                </span>
              )}
            </div>
          </div>
          <div className='lg:flex lg:flex-col space-y-2 w-full'>
            <div className='space-y-2 w-full'>
              <label className='block text-gray-600 font-semibold'>
                Mother's Name
              </label>
              <input
                type='text'
                name='motherName'
                onChange={handleChange}
                placeholder='Mother Name'
                className={`input-box ${
                  errors && !errors.motherName && `success`
                }`}
                required
              />
              {values.motherName && errors && errors.motherName && (
                <span className='text-xs text-primary font-medium'>
                  {errors.motherName}
                </span>
              )}
            </div>
            <div className='space-y-2 w-full'>
              <label className='block text-gray-600 font-semibold'>
                Mother's Phone Numebr
              </label>
              <input
                type='text'
                name='fatherMobile'
                onChange={handleChange}
                placeholder='Mother Phone No'
                className={`input-box ${
                  errors && !errors.fatherMobile && `success`
                }`}
              />
              {values.fatherMobile && errors && errors.fatherMobile && (
                <span className='text-xs text-primary font-medium'>
                  {errors.fatherMobile}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className='space-x-2 flex'>
          <button
            type='button'
            onClick={() => editPanelCloser('parent')}
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

export default ParentsDataEdit
