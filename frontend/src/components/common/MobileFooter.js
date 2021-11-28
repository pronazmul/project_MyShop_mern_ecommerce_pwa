import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_SIDEBAR_ACTIVE } from '../../redux/constants/cartConstants'

const MobileFooter = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { wishlistItems } = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()
  return (
    <>
      <div className='md:hidden block w-full shadow fixed bottom-0 z-20 bg-white'>
        <div className='p-2 grid grid-cols-5'>
          <Link
            to='/account?tab=wishlist'
            className='text-center text-gray-700 hover:text-primary transition'
          >
            <div className='flex flex-col items-center '>
              <i className='far fa-heart shadow rounded-full h-7 w-7 flex justify-center items-center relative'>
                {wishlistItems && wishlistItems.length > 0 && (
                  <span className='absolute -right-2 -top-1 bg-primary rounded-full w-4 h-4 text-xs text-white'>
                    {wishlistItems.length}
                  </span>
                )}
              </i>
              <div className='text-xs font-bold'> Fevourite</div>
            </div>
          </Link>
          <Link
            onClick={() => dispatch({ type: CART_SIDEBAR_ACTIVE })}
            className='text-center text-gray-700 hover:text-primary transition'
          >
            <div className='flex flex-col items-center'>
              <i className='fas fa-cart-plus shadow rounded-full h-7 w-7 flex justify-center items-center relative'>
                {cartItems && cartItems.length > 0 && (
                  <span className='absolute -right-2 -top-1 bg-primary rounded-full w-4 h-4 text-xs text-white'>
                    {cartItems.length}
                  </span>
                )}
              </i>
              <div className='text-xs font-bold'> Cart</div>
            </div>
          </Link>
          <Link
            to='/'
            className='mx-auto -mt-6 text-gray-700 hover:text-primary transition '
          >
            <i className='text-xl fas fa-home shadow-md rounded-full h-12 w-12 flex justify-center items-center bg-white'></i>
          </Link>
          <Link
            to='/notification'
            className='text-center text-gray-700 hover:text-primary transition '
          >
            <div className=' flex flex-col items-center'>
              <i className='far fa-bell shadow rounded-full h-7 w-7 flex justify-center items-center relative'>
                {/* Notificaton Will Be Dynamically Shown Up Here */}
                {/* <span className='absolute -right-2 -top-1 bg-primary rounded-full w-4 h-4 text-xs text-white'>
                  4
                </span> */}
              </i>
              <div className='text-xs font-bold'> Notification</div>
            </div>
          </Link>
          <Link
            to='/account'
            className='text-center text-gray-700 hover:text-primary transition relative'
          >
            <div className=' flex flex-col items-center'>
              <i className='far fa-user shadow rounded-full h-7 w-7 flex justify-center items-center'></i>
              <div className='text-xs font-bold'> Account</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileFooter
