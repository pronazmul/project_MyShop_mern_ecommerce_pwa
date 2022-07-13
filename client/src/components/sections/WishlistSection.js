import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCartAction } from '../../redux/actions/cartActions'
import { removeFromWishlistAction } from '../../redux/actions/wishlistActions'

const WishlistSection = () => {
  const dispatch = useDispatch()
  const { wishlistItems } = useSelector((state) => state.wishlist)
  useEffect(() => {}, [])
  return (
    <div className='shadow rounded bg-white px-4 py-6'>
      {/* Wishlist Title */}
      <div className='flex items-baseline border-b pb-1 border-gray-100'>
        <h3 className='text-sm lg:text-base font-black text-gray-600 pr-2'>
          Fevourite Items
        </h3>
      </div>
      {/* Wishlist Items */}
      <div className=' pt-4 space-y-4'>
        {wishlistItems.length ? (
          wishlistItems.map((item) => (
            <div
              key={item._id}
              className='flex items-center justify-between p-2 md:p-4 shadow gap-2 md:gap-4 rounded'
            >
              <div className='w-20 md:w-28 flex-shrink-0'>
                <img
                  src={item.image}
                  alt={item.name}
                  className=' rounded shadow-sm w-full'
                />
              </div>
              <div className='md:w-1/3 w-1/4'>
                <h3 className='uppercase text-sm md:text-base font-bold text-gray-800'>
                  {item.name}
                </h3>
                <p className='text-xs md:text-sm text-gray-500 font-semibold flex'>
                  <span className=' hidden md:block pr-2'>Availibity:</span>
                  {item.countInStock ? (
                    <span className='text-green-500'> In Stock</span>
                  ) : (
                    <span className='text-primary'>Out of Stock</span>
                  )}
                </p>
              </div>
              <p className=' text-primary font-bold text-sm'>${item.price}</p>
              <div className=''>
                <button
                  onClick={() => {
                    dispatch(addToCartAction(item._id))
                  }}
                  type='submit'
                  className='border border-primary w-full rounded bg-primary text-white p-2 hover:bg-transparent hover:text-gray-800 font-bold transition duration-300 text-xs lg:text-base'
                >
                  <span className=' block md:hidden'>
                    <i className='fas fa-cart-plus '></i>
                  </span>
                  <span className=' hidden md:block'> Add to Cart</span>
                </button>
              </div>
              <p
                onClick={() => {
                  dispatch(removeFromWishlistAction(item._id))
                }}
                className=' text-gray-600 font-lg cursor-pointer hover:text-primary transition duration-300'
              >
                <i className='fas fa-trash'></i>
              </p>
            </div>
          ))
        ) : (
          <div className='mt-4 text-gray text-center text-sm'>
            Wishlist is empty!{' '}
            <Link className='font-semibold hover:text-primary' to='/'>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default WishlistSection
