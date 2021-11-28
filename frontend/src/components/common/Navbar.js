import React from 'react'
import { Link } from 'react-router-dom'
import { catagoryDropdown } from '../dummyData/data'
import { useDispatch, useSelector } from 'react-redux'
import { userLogoutAction } from '../../redux/actions/authActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  return (
    <div className='bg-gray-800 md:block hidden '>
      <div className='container flex'>
        {/* All Categries */}
        <div className=' px-8 py-4 bg-primary flex items-center cursor-pointer relative group'>
          <span className='text-white'>
            <i className='fas fa-bars'></i>
          </span>
          <span className='uppercase text-white ml-2 text-lg lg:text-xl font-semibold'>
            All Categories
          </span>
          {/* Dropdown */}
          <div className='absolute left-0 top-full bg-white shadow-md w-full py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible lg:text-sm text-xs font-semibold z-20'>
            {catagoryDropdown.map((item) => (
              <Link
                to={item.path}
                className=' flex items-center px-6 py-3 hover:bg-gray-100 transition'
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-8 object-contain rounded'
                />
                <span className='ml-6 text-gray-600 '>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Navbar Links */}
        <div className=' flex justify-between flex-grow items-center ml-12 lg:text-sm text-xs font-semibold'>
          <div className=' flex items-center space-x-6 capitalize'>
            <Link to='/' className='text-gray-300 hover:text-white transition'>
              Home
            </Link>
            <Link
              to='/shop'
              className='text-gray-300 hover:text-white transition'
            >
              Shop
            </Link>
          </div>
          {userInfo && userInfo.email ? (
            <button
              onClick={() => dispatch(userLogoutAction())}
              className='relative capitialize block font-bold text-white'
            >
              <i className='fas fa-sign-out-alt absolute -left-4 top-1'></i>
              Logout
            </button>
          ) : (
            <Link
              to='/login'
              className='text-gray-300  hover:text-white transition'
            >
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
