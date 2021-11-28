import { Popover, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { catagoryDropdown } from '../dummyData/data'
import { useDispatch, useSelector } from 'react-redux'
import { userLogoutAction } from '../../redux/actions/authActions'
import { useHistory } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

const MobileHeader = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()
  const path = history.location.pathname.split('/')
  const checkSearchPage = Boolean(path.length === 3 && path[1] === 'search')
  useEffect(() => {
    if (searchQuery.split('').length > 0) {
      history.push(`/search/${searchQuery}`)
    } else if (searchQuery.split('').length === 0 && checkSearchPage) {
      history.push('/')
    }
  }, [searchQuery, checkSearchPage])

  return (
    <div className='md:hidden block sticky top-0 z-30 w-full bg-white'>
      <div className='container px-2 py-2 bg-white'>
        <Popover>
          {({ open }) => (
            <>
              <div className='flex items-center justify-between gap-6 md:gap-0'>
                {/* Humburger Icon */}
                <Popover.Button className='text-xl'>
                  <span className='text-gray-500 hover:text-primary'>
                    <i className='fas fa-bars'></i>
                  </span>
                </Popover.Button>
                {/* Searchbar */}
                <div className='w-full md:max-w-md relative flex text-xs lg:text-sm'>
                  <span className='absolute left-4 top-3 text-sm text-red-400'>
                    <i className='fas fa-search'></i>
                  </span>
                  <DebounceInput
                    type='text'
                    name='search'
                    minLength={1}
                    debounceTimeout={300}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder='Search for products'
                    className='w-full focus:ring-0 border border-primary focus:border-primary border-r-0 py-2 rounded-l-md focus:outline-none pl-12 placeholder-gray-300 '
                  />

                  <button className='bg-primary border border-primary text-white px-4 rounded-r-md hover:text-primary hover:bg-transparent transition duration-300'>
                    Search
                  </button>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter='duration-300 ease-out'
                enterFrom='opacity-0 scale-75'
                enterTo='opacity-100 scale-100'
                leave='duration-300 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-75'
              >
                <Popover.Panel
                  focus
                  static
                  className='absolute top-0 inset-x-0 p-1 transition transform origin-top-left'
                >
                  <div className='rounded-lg shadow-md ring-1 bg-white ring-black ring-opacity-5 overflow-hidden p-4 divide-y divide-gray-400 divide-dashed'>
                    <div className='flex items-center justify-between py-3'>
                      <Popover.Button as={Link} to='/'>
                        <img
                          className='h-8 w-auto'
                          src='/images/logo.png'
                          alt=''
                        />
                      </Popover.Button>
                      <div className='-mr-2'>
                        <Popover.Button className='text-xl text-gray-500 hover:text-primary'>
                          <span className='sr-only'>Close main menu</span>
                          <i className='fas fa-times'></i>
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='categories py-3'>
                      <h1 className='uppercase font-black text-gray-600 '>
                        Categories
                      </h1>
                      {catagoryDropdown.map((item) => (
                        <Popover.Button
                          as={Link}
                          to={item.path}
                          className=' flex items-center px-6 py-3 hover:bg-gray-100 transition'
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className='w-8 object-contain rounded'
                          />
                          <span className='ml-6 text-gray-600 '>
                            {item.name}
                          </span>
                        </Popover.Button>
                      ))}
                    </div>
                    <div className='pages py-3'>
                      <h1 className=' font-black text-gray-600 uppercase '>
                        Pages
                      </h1>
                      <Popover.Button
                        as={Link}
                        to='/shop'
                        className='block px-4 py-2 rounded-md  text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      >
                        Shop
                      </Popover.Button>
                    </div>
                    <div className='flex justify-center py-3'>
                      {userInfo && userInfo.email ? (
                        <button
                          onClick={() => dispatch(userLogoutAction())}
                          className='border border-primary w-1/4 rounded bg-primary text-white py-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300 text-center'
                        >
                          Logout
                        </button>
                      ) : (
                        <Popover.Button
                          as={Link}
                          to='/login'
                          className='border border-primary w-1/4 rounded bg-primary text-white py-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300 text-center'
                        >
                          Login
                        </Popover.Button>
                      )}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default MobileHeader
