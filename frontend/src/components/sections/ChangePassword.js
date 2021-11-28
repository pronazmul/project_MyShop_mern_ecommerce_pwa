import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { ChangePasswordSchema } from '../validationShemas/YupValidationSchemas'

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: (values) => {
      alert(
        JSON.stringify({
          oldPassword: values.oldPassword,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
      )
    },
  })
  const { handleChange, handleBlur, handleSubmit, errors, values } = formik

  const [passwordViewer, setPasswordViewer] = useState({
    oldPassword: 'password',
    password: 'password',
    confirmPassword: 'password',
  })

  const passowrdViewOpener = (input) => {
    setPasswordViewer({
      ...passwordViewer,
      [input]: 'text',
    })
  }
  const passowrdViewCloser = (input) => {
    setPasswordViewer({
      ...passwordViewer,
      [input]: 'password',
    })
  }

  return (
    <>
      <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
        <div className='flex items-baseline border-b pb-1 border-gray-100'>
          <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
            Change Password
          </h3>
        </div>
        <div className='w-full lg:w-1/2 pt-8 pl-10'>
          <form
            onSubmit={handleSubmit}
            className=' space-y-3 text-xs lg:text-sm'
          >
            <div className='space-y-2 relative'>
              <label className='block text-gray-600 font-semibold'>
                Old Password
              </label>
              <span className='absolute right-3 top-8 text-gray-500 cursor-pointer'>
                {passwordViewer.oldPassword === 'password' ? (
                  <i
                    onClick={() => passowrdViewOpener('oldPassword')}
                    className='far fa-eye'
                  ></i>
                ) : (
                  <i
                    onClick={() => passowrdViewCloser('oldPassword')}
                    className='far fa-eye-slash'
                  ></i>
                )}
              </span>
              <input
                name='oldPassword'
                type={passwordViewer.oldPassword}
                placeholder='Old Password'
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`input-box ${
                  errors && !errors.oldPassword && `success`
                }`}
              />
              {values.oldPassword && errors && errors.oldPassword && (
                <span className='text-xs text-primary font-medium'>
                  {errors.oldPassword}
                </span>
              )}
            </div>
            <div className='space-y-2 relative'>
              <label className='block text-gray-600 font-semibold'>
                New Password
              </label>
              <span className='absolute right-3 top-8 text-gray-500 cursor-pointer'>
                {passwordViewer.password === 'password' ? (
                  <i
                    onClick={() => passowrdViewOpener('password')}
                    className='far fa-eye'
                  ></i>
                ) : (
                  <i
                    onClick={() => passowrdViewCloser('password')}
                    className='far fa-eye-slash'
                  ></i>
                )}
              </span>
              <input
                name='password'
                type={passwordViewer.password}
                placeholder='New Password'
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`input-box ${
                  errors && !errors.password && `success`
                }`}
              />
              {values.password && errors && errors.password && (
                <span className='text-xs text-primary font-medium'>
                  {errors.password}
                </span>
              )}
            </div>
            <div className='space-y-2 relative'>
              <label className='block text-gray-600 font-semibold'>
                Enter New Password
              </label>
              <span className='absolute right-3 top-8 text-gray-500 cursor-pointer'>
                {passwordViewer.confirmPassword === 'password' ? (
                  <i
                    onClick={() => passowrdViewOpener('confirmPassword')}
                    className='far fa-eye'
                  ></i>
                ) : (
                  <i
                    onClick={() => passowrdViewCloser('confirmPassword')}
                    className='far fa-eye-slash'
                  ></i>
                )}
              </span>
              <input
                name='confirmPassword'
                type={passwordViewer.confirmPassword}
                placeholder='Enter New Password'
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`input-box ${
                  errors && !errors.confirmPassword && `success`
                }`}
              />
              {values.confirmPassword && errors && errors.confirmPassword && (
                <span className='text-xs text-primary font-medium'>
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <button
              type='submit'
              className='border border-primary w-full rounded bg-primary text-white py-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300'
            >
              Save New Password
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
