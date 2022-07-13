import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../redux/actions/cartActions'
import { addToWishlistAction } from '../../redux/actions/wishlistActions'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <>
      {product.map((item) => (
        <div className='bg-white shadow rounded overflow-hidden group flex flex-col justify-between '>
          {/* Product Image */}
          <div className='relative'>
            <Link to={`/shop/product/${item._id}`}>
              <img
                src={item.images[0]}
                alt={item.name}
                className='w-full h-40 object-contain p-2'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 gap-2 opacity-0 group-hover:opacity-100 transition duration-500'>
                <Link
                  to={`/shop/product/${item._id}`}
                  className=' text-white text-xs bg-primary rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-800 transition duration-300'
                >
                  <i className='fas fa-search'></i>
                </Link>
                <Link
                  to='#'
                  onClick={() => {
                    dispatch(addToWishlistAction(item._id))
                  }}
                  className=' text-white text-xs bg-primary rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-800 transition duration-300'
                >
                  <i className='far fa-heart'></i>
                </Link>
              </div>
            </Link>
          </div>
          {/* Product Content */}
          <div className='p-2 lg:p-4'>
            <Link to={`/shop/product/${item._id}`}>
              <h3 className=' uppercase font-bold text-xs md:text-sm text-gray-800 hover:text-primary transition duration-300'>
                {item.name}
              </h3>
            </Link>
            <div className=' flex items-baseline  my-1 space-x-3 font-roboto'>
              <p className='text-sm text-primary font-bold'>${item.price}</p>
              <p className=' text-xs  text-gray-400 line-through'>
                ${item.price - 50}
              </p>
            </div>
            <div className=' flex items-center'>
              <Ratings rating={item.rating} />
              <div className=' text-xs text-gray-500 ml-3'>
                ({item.numReviews})
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(addToCartAction(item._id))
            }}
            className='bg-primary border border-primary hover:text-primary hover:bg-transparent rounded-b text-white block w-full text-center py-1 transition duration-300 text-xs font-bold lg:text-sm'
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  )
}

export default Product
