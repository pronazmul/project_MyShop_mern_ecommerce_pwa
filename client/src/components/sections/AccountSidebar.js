import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { userAccountLinks } from '../dummyData/data'
import { useDispatch } from 'react-redux'
import { userLogoutAction } from '../../redux/actions/authActions'

const AccountSidebar = ({ userInfo }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const redirect = location.search.split('=')[1]
  return (
    <>
      {/* Profile */}
      <div className=' px-4 py-3 flex items-center gap-4 shadow rounded'>
        <div className='flex-shrink-0'>
          {userInfo.photo ? (
            <img
              src={userInfo.photo}
              alt='Profile Image'
              className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover'
            />
          ) : (
            <div className='bg-gray-400 w-14 h-14 rounded-full text-white uppercase font-bold flex justify-center items-center'>
              {userInfo.name.split('')[0]}
            </div>
          )}
        </div>
        <div className='flex-grow'>
          <p className='text-gray-600'>Hello,</p>
          <h4 className='text-gray-600 font-semibold'>{userInfo.name}</h4>
        </div>
      </div>
      {/* Profile Links */}
      <div className='px-4 pb-4 shadow mt-4 rounded divide-y divide-gray-200 space-y-4 text-gray-600'>
        {userAccountLinks &&
          userAccountLinks.map((item) => (
            <div className='space-y-1 pl-8 pt-4'>
              <Link
                to={`/account?tab=${item.sublink}`}
                className={
                  redirect === item.sublink
                    ? `text-primary relative capitialize block font-bold focus-within:transition`
                    : !redirect && item.sublink === 'basic'
                    ? `text-primary relative capitialize block font-bold focus-within:transition`
                    : `relative capitialize block font-bold focus-within:transition`
                }
              >
                <i className={`${item.icon} absolute -left-8 top-1`}></i>
                {item.name}
              </Link>
              {item.subCategory &&
                item.subCategory.map((subitem) => (
                  <Link
                    to={`/account?tab=${subitem.sublink}`}
                    className={
                      redirect === subitem.sublink
                        ? `capitialize block text-primary transition`
                        : `capitialize block hover:text-primary transition`
                    }
                  >
                    {subitem.name}
                  </Link>
                ))}
            </div>
          ))}
        <div className='space-y-1 pl-8 pt-4'>
          <button
            onClick={() => dispatch(userLogoutAction())}
            className='relative capitialize block font-bold focus-within:transition'
          >
            <i className='fas fa-sign-out-alt absolute -left-8 top-1'></i>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default AccountSidebar
