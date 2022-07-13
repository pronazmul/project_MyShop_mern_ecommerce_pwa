import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { RegistrationSchema } from './../validationShemas/YupValidationSchemas'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from './../../redux/actions/authActions'
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from './../authentication/firebaseConfig'
import ToastNotification from '../elements/ToastNotification'

const RegisterScreen = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  // Handle Routing Path to redirect User after logged in:
  const history = useHistory()
  const location = useLocation()
  const { form } = location.state || { form: { pathname: '/' } }
  // Toast Alert State
  const [toastAlert, setToastAlert] = useState({
    title: '',
    message: '',
    show: false,
    color: '',
  })
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassowrd: '',
      acceptTerms: false,
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      setToastAlert({
        ...toastAlert,
        title: '',
        message: '',
        show: false,
        color: '',
      })
      // Firebase Sign in With Email and Passowrd
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((result) => {
          const user = auth.currentUser
          user.updateProfile({ displayName: values.fullName })
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then((res) => {
              const { displayName, email } = res.user
              const user = { name: displayName, email: email, photo: '' }
              setToastAlert({
                ...toastAlert,
                title: 'Success',
                message: 'Registration Successfull',
                show: true,
                color: 'green',
              })
              dispatch(userLoginAction(user))
              history.replace(form)
            })
        })
        .catch((error) => {
          setToastAlert({
            ...toastAlert,
            title: 'Error',
            message: 'Email Already Used!',
            show: true,
            color: 'red',
          })
        })
    },
  })
  const { handleChange, handleSubmit, errors, values } = formik

  // Handle Password Viewer:
  const [passwordViewer, setPasswordViewer] = useState({
    password: 'password',
    confirmPassowrd: 'password',
  })
  const passwordViewOpener = (input) => {
    setPasswordViewer({
      ...passwordViewer,
      [input]: 'text',
    })
  }
  const passwordViewCloser = (input) => {
    setPasswordViewer({
      ...passwordViewer,
      [input]: 'password',
    })
  }

  // Handle Social Media Login with Firebase
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider).then((response) => {
      const { photoURL, displayName, email } = response.user
      const user = { name: displayName, email: email, photo: photoURL }
      setToastAlert({
        ...toastAlert,
        title: 'Success',
        message: 'Registration Successfull',
        show: true,
        color: 'green',
      })
      dispatch(userLoginAction(user))
      history.replace(form)
    })
  }

  const signInWithFacebook = () => {
    auth.signInWithPopup(facebookAuthProvider).then((response) => {
      const { photoURL, displayName, email } = response.user
      const user = {
        name: displayName,
        email: email,
        photo: `${photoURL}?access_token=${response.credential.accessToken}`,
      }
      setToastAlert({
        ...toastAlert,
        title: 'Success',
        message: 'Registration Successfull',
        show: true,
        color: 'green',
      })
      dispatch(userLoginAction(user))
      history.replace(form)
    })
  }

  useEffect(() => {
    if (userInfo && userInfo.email) {
      history.replace(form)
    }
  }, [userInfo])

  return (
    <div className='container w-full h-full my-12 relative'>
      {toastAlert.show && (
        <ToastNotification
          color={toastAlert.color}
          title={toastAlert.title}
          show={toastAlert.show}
        >
          {toastAlert.message}
        </ToastNotification>
      )}
      <div className='max-w-sm mx-auto shadow rounded px-6 py-8 overflow-hidden text-xs lg:text-sm'>
        <h3 className='text-base lg:text-lg uppercase font-bold mb-2'>
          Create An Account
        </h3>
        <p className='text-gray-600 mb-3'>
          Register here if you don't have any account
        </p>
        <form onSubmit={handleSubmit} className=' space-y-3'>
          <div className='space-y-2'>
            <label className='block text-gray-600 font-semibold'>
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              onChange={handleChange}
              required
              placeholder='Your Name'
              className={`input-box ${errors && !errors.fullName && `success`}`}
            />
            {values.fullName && errors && errors.fullName && (
              <span className='text-xs text-primary font-medium'>
                {errors.fullName}
              </span>
            )}
          </div>
          <div className='space-y-2'>
            <label className='block text-gray-600 font-semibold'>
              Email Address
            </label>
            <input
              type='text'
              name='email'
              onChange={handleChange}
              required
              placeholder='Enter your email'
              className={`input-box ${errors && !errors.email && `success`}`}
            />
            {values.email && errors && errors.email && (
              <span className='text-xs text-primary font-medium'>
                {errors.email}
              </span>
            )}
          </div>
          <div className='space-y-2 relative'>
            <label className='block text-gray-600 font-semibold'>
              Password
            </label>
            <span className='absolute right-3 top-8 text-gray-500 cursor-pointer'>
              {passwordViewer.password === 'password' ? (
                <i
                  onClick={() => passwordViewOpener('password')}
                  className='far fa-eye'
                ></i>
              ) : (
                <i
                  onClick={() => passwordViewCloser('password')}
                  className='far fa-eye-slash'
                ></i>
              )}
            </span>
            <input
              type={passwordViewer.password}
              name='password'
              onChange={handleChange}
              required
              placeholder='Enter Passowrd'
              className={`input-box ${errors && !errors.password && `success`}`}
            />
            {values.password && errors && errors.password && (
              <span className='text-xs text-primary font-medium'>
                {errors.password}
              </span>
            )}
          </div>
          <div className='space-y-2 relative'>
            <label className='block text-gray-600 font-semibold'>
              Confirm Password
            </label>
            <span className='absolute right-3 top-8 text-gray-500 cursor-pointer'>
              {passwordViewer.confirmPassowrd === 'password' ? (
                <i
                  onClick={() => passwordViewOpener('confirmPassowrd')}
                  className='far fa-eye'
                ></i>
              ) : (
                <i
                  onClick={() => passwordViewCloser('confirmPassowrd')}
                  className='far fa-eye-slash'
                ></i>
              )}
            </span>
            <input
              type={passwordViewer.confirmPassowrd}
              name='confirmPassowrd'
              onChange={handleChange}
              required
              placeholder='Retype Your Password'
              className={`input-box ${
                errors && !errors.confirmPassowrd && `success`
              }`}
            />
            {values.confirmPassowrd && errors && errors.confirmPassowrd && (
              <span className='text-xs text-primary font-medium'>
                {errors.confirmPassowrd}
              </span>
            )}
          </div>
          <div className=''>
            <div className='flex items-center space-x-3'>
              <input
                type='checkbox'
                name='acceptTerms'
                onChange={handleChange}
                id='agree'
                className='text-primary focus:ring-0 rounded cursor-pointer'
              />

              <label
                for='agree'
                className='cursor-pointer text-gray-600 select-none'
              >
                I I have read and agree with the{' '}
                <Link to='' className='text-primary'>
                  terms and conditions
                </Link>
              </label>
            </div>
            {!values.acceptTerms && errors.acceptTerms && (
              <span className='text-xs text-primary font-medium'>
                {errors.acceptTerms}
              </span>
            )}
          </div>
          <button
            type='submit'
            className='border border-primary w-full rounded bg-primary text-white py-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300'
          >
            Register
          </button>
        </form>
        <div className='mt-4 flex justify-center relative'>
          <div className='uppercase text-gray-600 bg-white z-10 px-2 font-semibold'>
            Or Singup with
          </div>
          <div className='border-b-2 w-full absolute left-0 top-3 border-gray-200'></div>
        </div>
        <div className=' flex mt-4 space-x-2'>
          <button
            onClick={signInWithFacebook}
            className='w-1/2 bg-blue-800 rounded uppercase text-center text-white py-2 font-roboto font-medium hover:bg-blue-700 transition duration-300'
          >
            Facebook
          </button>
          <button
            onClick={signInWithGoogle}
            className='w-1/2 bg-yellow-600 rounded uppercase text-center text-white py-2 font-roboto font-medium hover:bg-yellow-500 transition duration-300'
          >
            Google
          </button>
        </div>
        <p className='text-gray-600 mt-4 text-center'>
          Already have an account?{' '}
          <Link to='/login' className=' text-primary font-semibold'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterScreen
