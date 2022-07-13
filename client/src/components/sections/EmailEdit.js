import { useFormik } from 'formik'
import React from 'react'
import { emailSchema } from '../validationShemas/YupValidationSchemas'

const EmailEdit = ({ editPanelCloser }) => {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      primaryEmail: '',
      backupEmail: '',
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      alert(
        JSON.stringify({
          primaryEmail: values.primaryEmail,
          backupEmail: values.backupEmail,
        })
      )
    },
  })
  const { handleChange, handleSubmit, errors, values } = formik
  return (
    <div className='w-full lg:w-3/4'>
      <form onSubmit={handleSubmit} className='space-y-2 text-xs lg:text-sm'>
        {/* Mail Input Boxes */}
        <div className='lg:flex lg:space-x-3 space-y-2 lg:space-y-0'>
          <div className='space-y-2 w-full'>
            <label className='block text-gray-600 font-semibold'>
              Primary Email
            </label>
            <input
              type='email'
              name='primaryEmail'
              onChange={handleChange}
              placeholder='Primary Email'
              required
              className={`input-box ${
                errors && !errors.primaryEmail && `success`
              }`}
            />
            {values.primaryEmail && errors && errors.primaryEmail && (
              <span className='text-xs text-primary font-medium'>
                {errors.primaryEmail}
              </span>
            )}
          </div>
          <div className='space-y-2 w-full'>
            <label className='block text-gray-600 font-semibold'>
              Primary Email
            </label>
            <input
              type='email'
              name='backupEmail'
              onChange={handleChange}
              placeholder='Backup Email'
              className={`input-box ${
                errors && !errors.backupEmail && `success`
              }`}
            />
            {values.backupEmail && errors && errors.backupEmail && (
              <span className='text-xs text-primary font-medium'>
                {errors.backupEmail}
              </span>
            )}
          </div>
        </div>
        {/* Button */}
        <div className='space-x-2 flex'>
          <button
            type='button'
            onClick={() => editPanelCloser('email')}
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

export default EmailEdit
