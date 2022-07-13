import React, { useEffect, useState } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import ProductDetailsImage from './../sections/ProductDetailsImage'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailsAction } from '../../redux/actions/productActions'
import Rattings from '../sections/Ratings'
import Product from '../sections/Product'
import { addToWishlistAction } from '../../redux/actions/wishlistActions'
import { addToCartAction } from '../../redux/actions/cartActions'
import { PRODUCT_LIST_RESET } from '../../redux/constants/productConstants'
import Loader from '../elements/Loader'
import ErrorMessage from '../elements/ErrorMessage'

const ProductDetailsScreen = () => {
  const { id } = useParams()
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  const { loading, error, product, related } = useSelector(
    (state) => state.productDetails
  )

  // Side Effects
  useEffect(() => {
    if (product && product.id === id) {
      dispatch({ type: PRODUCT_LIST_RESET })
    } else {
      dispatch(productDetailsAction(id))
    }
  }, [id, dispatch])

  return (
    <>
      <Breadcrumb />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 py-4'>
            <div id='product-image'>
              <ProductDetailsImage images={product.images} />
            </div>
            <div id='details' className='space-y-2'>
              <h2 className='text-xl lg:text-2xl font-bold uppercase'>
                {product.name}
              </h2>
              <div className='flex items-center'>
                <Rattings rating={product.rating} />
                <span className='text-xs text-gray-500 ml-3'>
                  ({product.reviews.length} Reviews)
                </span>
              </div>
              <div className='space-y-2'>
                <p className='space-x-4 font-bold text-gray-800'>
                  <span>Availability:</span>
                  {product.countInStock ? (
                    <span className='text-green-500'>In Stock</span>
                  ) : (
                    <span className='text-red-500'>Out Of Stock</span>
                  )}
                </p>
                <p className='space-x-4'>
                  <span className=' font-bold text-gray-800'>Brand:</span>
                  <span className='text-gray-600'>{product.brand}</span>
                </p>
                <p className='space-x-4'>
                  <span className=' font-bold text-gray-800'>Category:</span>
                  <span className='text-gray-600'>{product.category}</span>
                </p>
                <p className='space-x-4'>
                  <span className=' font-bold text-gray-800'>SKU:</span>
                  <span className='text-gray-600'>K34K34L</span>
                </p>
              </div>
              <div className=' flex items-baseline space-x-3 font-roboto'>
                <p className='text-xl lg:text-2xl text-primary font-bold'>
                  ${product.price}
                </p>
                <p className=' text-sm  text-gray-400 line-through'>
                  ${product.price - 50}
                </p>
              </div>
              <p className='text-gray-600'>{product.description}</p>
              <div id='sizing' className=''>
                <h3 className='uppercase text-md text-gray-800 mb-3 font-bold'>
                  Size
                </h3>
                <div className='flex items-center gap-2'>
                  <div className='size-selector'>
                    <input
                      type='radio'
                      name='size'
                      id='size-xs'
                      className='hidden'
                    />
                    <label
                      for='size-xs'
                      className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                    >
                      XS
                    </label>
                  </div>
                  <div className='size-selector'>
                    <input
                      type='radio'
                      name='size'
                      id='size-s'
                      className='hidden'
                    />
                    <label
                      for='size-s'
                      className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                    >
                      S
                    </label>
                  </div>
                  <div className='size-selector'>
                    <input
                      type='radio'
                      name='size'
                      id='size-m'
                      className='hidden'
                    />
                    <label
                      for='size-m'
                      className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                    >
                      M
                    </label>
                  </div>
                  <div className='size-selector'>
                    <input
                      type='radio'
                      name='size'
                      id='size-l'
                      className='hidden'
                    />
                    <label
                      for='size-l'
                      className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                    >
                      L
                    </label>
                  </div>
                  <div className='size-selector'>
                    <input
                      type='radio'
                      name='size'
                      id='size-xl'
                      className='hidden'
                    />
                    <label
                      for='size-xl'
                      className='text-xs text-gray-600 border border-gray-200 w-6 h-6 flex items-center justify-center rounded cursor-pointer shadow-sm '
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div>
              <div id='colors' className=''>
                <h3 className='uppercase text-md text-gray-800 mb-3 font-bold'>
                  colors
                </h3>
                <div className='flex items-center gap-2'>
                  <div className='color-selector'>
                    <input
                      type='radio'
                      name='color'
                      id='color-red'
                      className='hidden'
                    />
                    <label
                      for='color-red'
                      className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                      style={{ backgroundColor: '#FC4444' }}
                    ></label>
                  </div>
                  <div className='color-selector'>
                    <input
                      type='radio'
                      name='color'
                      id='color-white'
                      className='hidden'
                    />
                    <label
                      for='color-white'
                      className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                      style={{ backgroundColor: '#ffffff' }}
                    ></label>
                  </div>
                  <div className='color-selector'>
                    <input
                      type='radio'
                      name='color'
                      id='color-blue'
                      className='hidden'
                    />
                    <label
                      for='color-blue'
                      className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                      style={{ backgroundColor: '#0000FF' }}
                    ></label>
                  </div>
                  <div className='color-selector'>
                    <input
                      type='radio'
                      name='color'
                      id='color-black'
                      className='hidden'
                    />
                    <label
                      for='color-black'
                      className='border border-gray w-6 h-6 block rounded cursor-pointer shadow-sm'
                      style={{ backgroundColor: '#000000' }}
                    ></label>
                  </div>
                </div>
              </div>
              <div id='quantity' className=''>
                <h3 className='uppercase text-md text-gray-800 mb-3 font-bold'>
                  Quantity
                </h3>
                <div className='flex border border-gray-300 w-max text-gray-600 divide-x divide-gray-300 rounded'>
                  <div
                    className=' h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                    onClick={() => qty > 0 && setQty(qty - 1)}
                  >
                    -
                  </div>
                  <div className=' h-8 w-8 text-sm flex items-center justify-center '>
                    {qty}
                  </div>
                  <div
                    className=' h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                id='cart'
                className='carts flex gap-3 border-b border-gray-200 py-2'
              >
                <div
                  onClick={() => {
                    dispatch(addToCartAction(product._id))
                  }}
                  className='bg-primary border border-gray-400 rounded text-white px-3 lg:px-8 py-2 font-semibold uppercase flex items-center gap-2 hover:bg-transparent hover:text-gray-700 transition duration-200 md:flex'
                >
                  <i className='fas fa-shopping-bag'></i>Cart
                </div>
                <div
                  onClick={() => {
                    dispatch(addToWishlistAction(product._id))
                  }}
                  className='bg-primary border border-gray-400 rounded text-white px-3 lg:px-8 py-2 font-semibold uppercase flex items-center gap-2 hover:bg-transparent hover:text-gray-700 transition duration-200'
                >
                  <i className='fas fa-heart'></i>Wishlist
                </div>
              </div>
              <div id='social' className='Social flex items-center gap-3'>
                <p className='uppercase text-xl font-bold text-gray-600'>
                  Share:
                </p>
                <Link
                  to=''
                  className='text-gray-400 hover:text-gray-600 border border-gray-300 h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <i className='fab fa-facebook-f'></i>
                </Link>
                <Link
                  to=''
                  className='text-gray-400 hover:text-gray-600 border border-gray-300 h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <i className='fab fa-twitter'></i>
                </Link>
                <Link
                  to=''
                  className='text-gray-400 hover:text-gray-600 border border-gray-300 h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <i className='fab fa-instagram'></i>
                </Link>
                <Link
                  to=''
                  className='text-gray-400 hover:text-gray-600 border border-gray-300 h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <i className='fab fa-linkedin-in'></i>
                </Link>
              </div>
            </div>
          </div>
          <div id='description' className='container pb-12'>
            <h3 className=' border-b border-gray-200 font-roboto text-gray-800 pb-3 font-bold text-xl'>
              Product Details
            </h3>
            <div className=' w-full md:w-3/5 pt-6'>
              <div className='text-gray-700 space-y-3'>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown ...
                </p>
                <p>
                  Easily generate Lorem Ipsum placeholder text in any number of
                  characters, words sentences or paragraphs. Learn about the
                  origins of the passage and its ...
                </p>
                <p>
                  Source text — The Lorem ipsum text is derived from sections
                  1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et
                  malorum'. The physical source may ...
                </p>
              </div>
              <table className='w-full mt-5 text-left text-gray-600 text-sm'>
                <tr>
                  <th className='py-2 px-4 border border-gray-300 w-40 font-bold'>
                    Color
                  </th>
                  <td className='py-2 px-4 border border-gray-300 '>
                    Black, Brown, Red
                  </td>
                </tr>
                <tr>
                  <th className='py-2 px-4 border border-gray-300 w-40 font-bold'>
                    Material
                  </th>
                  <td className='py-2 px-4 border border-gray-300 '>
                    Artificial Cotton
                  </td>
                </tr>
                <tr>
                  <th className='py-2 px-4 border border-gray-300 w-40 font-bold'>
                    Weight
                  </th>
                  <td className='py-2 px-4 border border-gray-300 '>50 kg</td>
                </tr>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Related Products */}
      <div id='related-products' className='container mb-12'>
        <h3 className='font-roboto text-gray-800 pb-3 font-bold text-md lg:text-xl'>
          Related Products
        </h3>
        <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          <Product product={related} />
        </div>
      </div>
    </>
  )
}

export default ProductDetailsScreen
