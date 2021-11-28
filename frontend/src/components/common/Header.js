import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_SIDEBAR_ACTIVE } from '../../redux/constants/cartConstants'
import { useHistory } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { wishlistItems } = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()
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
    <>
      <div className=' md:block hidden sticky top-0 z-20 w-full bg-white shadow'>
        <div className='container p-2 lg:p-4 bg-white'>
          <div className='flex items-center justify-between gap-6 md:gap-0'>
            {/* Logo */}
            <div className='md:block hidden'>
              <Link to='/'>
                <img
                  className='w-24 lg:w-36 '
                  src='/images/logo.png'
                  alt='Brand Logo'
                />
              </Link>
            </div>
            {/* Searchbar */}
            <div className='w-full md:max-w-md lg:max-w-lg relative flex text-xs  lg:text-sm'>
              <span className='absolute left-4 top-3 lg:top-4 text-sm  lg:text-base text-red-400'>
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
                className='w-full focus:ring-0 border border-primary focus:border-primary border-r-0 py-2 lg:py-3  rounded-l-md focus:outline-none pl-12 placeholder-gray-300 '
              />
              <button className='bg-primary border border-primary text-white px-4 lg:px-8 rounded-r-md hover:text-primary hover:bg-transparent transition duration-300'>
                Search
              </button>
            </div>
            {/* Notification Icons */}
            <div className=' md:block hidden'>
              <div className='flex space-x-3'>
                <Link
                  to='/account?tab=wishlist'
                  className='text-center text-gray-700 hover:text-primary transition'
                >
                  <div className='text-lg'>
                    <i className='far fa-heart relative'>
                      {wishlistItems && wishlistItems.length > 0 && (
                        <span className='absolute -right-2 -top-2 bg-primary rounded-full w-4 h-4 text-xs text-white '>
                          {wishlistItems.length}
                        </span>
                      )}
                    </i>
                    <div className='text-xs lg:text-sm'> Fevorite</div>
                  </div>
                </Link>
                <Link className='text-center text-gray-700 hover:text-primary transition relative'>
                  <div
                    onClick={() => dispatch({ type: CART_SIDEBAR_ACTIVE })}
                    className='text-lg'
                  >
                    <i className='fas fa-cart-plus relative'>
                      {cartItems && cartItems.length > 0 && (
                        <span className='absolute -right-2 -top-2 bg-primary rounded-full w-4 h-4 text-xs text-white '>
                          {cartItems.length}
                        </span>
                      )}
                    </i>
                    <div className='text-xs lg:text-sm'> Cart</div>
                  </div>
                </Link>
                <Link
                  to='/account'
                  className='text-center text-gray-700 hover:text-primary transition relative'
                >
                  <div className='text-lg'>
                    <i className='far fa-user'></i>
                    <div className='text-xs lg:text-sm'> Account</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
