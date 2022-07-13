import { useFormik } from 'formik'
import React from 'react'
import { personalInfoSchema } from '../validationShemas/YupValidationSchemas'

const PersonalDataEdit = ({ editPanelCloser }) => {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobile: '',
      dateOfBirth: '',
      gender: '',
      occupation: '',
      organization: '',
    },
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      alert(
        JSON.stringify({
          fullName: values.fullName,
          mobile: values.mobile,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
          occupation: values.occupation,
          organization: values.organization,
        })
      )
    },
  })
  const { handleChange, handleSubmit, errors, values } = formik
  return (
    <div className='w-full lg:w-3/4'>
      <form onSubmit={handleSubmit} className='space-y-2 text-xs lg:text-sm'>
        <div className='space-y-2'>
          <label className='block text-gray-600 font-semibold'>Full Name</label>
          <input
            type='text'
            name='fullName'
            onChange={handleChange}
            placeholder='Nazmul Huda'
            className={`input-box ${errors && !errors.fullName && `success`}`}
            required
          />
          {values.fullName && errors && errors.fullName && (
            <span className='text-xs text-primary font-medium'>
              {errors.fullName}
            </span>
          )}
        </div>
        <div className='space-y-2'>
          <label className='block text-gray-600 font-semibold'>
            Contract Number
          </label>
          <input
            type='text'
            name='mobile'
            onChange={handleChange}
            placeholder='01746888130'
            className={`input-box ${errors && !errors.mobile && `success`}`}
          />
          {values.mobile && errors && errors.mobile && (
            <span className='text-xs text-primary font-medium'>
              {errors.mobile}
            </span>
          )}
        </div>
        <div className='lg:space-x-2 lg:flex w-full lg:justify-between lg:items-baseline'>
          <div className='space-y-2 w-full lg:w-1/2'>
            <label className='block text-gray-600 font-semibold'>
              Date of Birth
            </label>
            <input
              type='date'
              name='dateOfBirth'
              onChange={handleChange}
              className='input-box success'
            />
          </div>
          <div className='space-y-2 w-full lg:w-1/2'>
            <label className='block text-gray-600 font-semibold'>Gender</label>
            <select
              className=' rounded text-xs lg:text-sm text-gray-600 py-3 border-gray-300 shadow-sm success w-full'
              name='gender'
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='others'>Others</option>
            </select>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='block text-gray-600 font-semibold'>
            Occupation
          </label>
          <input
            type='text'
            name='occupation'
            onChange={handleChange}
            placeholder='Occupation'
            className={`input-box ${errors && !errors.occupation && `success`}`}
          />
          {values.occupation && errors && errors.occupation && (
            <span className='text-xs text-primary font-medium'>
              {errors.occupation}
            </span>
          )}
        </div>
        <div className='space-y-2'>
          <label className='block text-gray-600 font-semibold'>
            Organization
          </label>
          <input
            type='text'
            name='organization'
            onChange={handleChange}
            placeholder='Organization'
            className={`input-box ${
              errors && !errors.organization && `success`
            }`}
          />
          {values.organization && errors && errors.organization && (
            <span className='text-xs text-primary font-medium'>
              {errors.organization}
            </span>
          )}
        </div>
        <div className='space-x-2 flex'>
          <button
            type='button'
            onClick={() => editPanelCloser('personal')}
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

export default PersonalDataEdit
