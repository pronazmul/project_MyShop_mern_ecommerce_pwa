import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCartAction,
  removeFromCartAction,
} from '../../redux/actions/cartActions'
import { CART_SIDEBAR_HIDE } from '../../redux/constants/cartConstants'

export default function CartSidebar() {
  const dispatch = useDispatch()
  const { cartItems, cartSidebar } = useSelector((state) => state.cart)
  const [viewCart, setViewCart] = useState(false)
  useEffect(() => {
    if (cartSidebar) {
      setViewCart(true)
    } else {
      setViewCart(false)
    }
  }, [dispatch, cartItems, cartSidebar])

  const cartCloseHandler = () => {
    setViewCart(false)
    dispatch({ type: CART_SIDEBAR_HIDE })
  }

  return (
    <Transition.Root show={viewCart ? true : false} as={Fragment}>
      <Dialog
        as='div'
        className='absolute z-30 inset-0 overflow-hidden'
        onClose={cartCloseHandler}
      >
        <div className='absolute z-30 inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute h-full inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-bold uppercase text-gray-900'>
                        Your Cart
                      </Dialog.Title>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                          onClick={cartCloseHandler}
                        >
                          <span className='h-6 w-6'>
                            <i className='fa fa-times'></i>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className='mt-8'>
                      <div className='flow-root'>
                        <ul
                          role='list'
                          className='-my-6 divide-y divide-gray-200'
                        >
                          {cartItems.length ? (
                            cartItems.map((product) => (
                              <li key={product._id} className='py-6 flex'>
                                <div className='flex-shrink-0 w-1/4 border border-gray-200 rounded-md overflow-hidden'>
                                  <img
                                    src={product.image}
                                    alt={product.image}
                                    className='w-full h-full object-center object-cover'
                                  />
                                </div>
                                <div className='ml-4 flex-1 flex flex-col'>
                                  <div>
                                    <div className='flex justify-between text-base font-medium text-gray-900'>
                                      <h3>
                                        <Link
                                          to={`/shop/product/${product._id}`}
                                        >
                                          {product.name}
                                        </Link>
                                      </h3>
                                      <p className='ml-4'>
                                        ${product.price * product.qty}
                                      </p>
                                    </div>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      ${product.price}
                                    </p>
                                  </div>
                                  <div className='flex-1 flex justify-between text-sm items-center'>
                                    <div className='flex border border-gray-300 w-max text-gray-600 divide-x divide-gray-300 rounded'>
                                      <div
                                        onClick={() => {
                                          product.qty > 1 &&
                                            dispatch(
                                              addToCartAction(
                                                product._id,
                                                product.qty - 1
                                              )
                                            )
                                        }}
                                        className='h-6 w-6 hover:text-primary lg:h-8 lg:w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                                      >
                                        -
                                      </div>
                                      <div className='h-6 w-6 lg:h-8 lg:w-8 text-sm flex items-center justify-center '>
                                        {product.qty}
                                      </div>
                                      <div
                                        onClick={() => {
                                          product.qty < product.countInStock &&
                                            dispatch(
                                              addToCartAction(
                                                product._id,
                                                product.qty + 1
                                              )
                                            )
                                        }}
                                        className='h-6 w-6 hover:text-primary lg:h-8 lg:w-8 text-xl flex items-center justify-center cursor-pointer select-none'
                                      >
                                        +
                                      </div>
                                    </div>
                                    <p
                                      onClick={() => {
                                        dispatch(
                                          removeFromCartAction(product._id)
                                        )
                                      }}
                                      className=' text-gray-600 cursor-pointer hover:text-primary transition duration-300'
                                    >
                                      <i className='fas fa-trash'></i>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))
                          ) : (
                            <div className='text-center mt-5 text-gray-500'>
                              Your cart is empty!
                            </div>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 py-2 lg:py-6 px-6 space-y-4'>
                    <div className='w-full md:max-w-md relative flex text-xs lg:text-sm'>
                      <input
                        type='text'
                        placeholder='Promo Code'
                        className='w-full focus:ring-0 border border-primary focus:border-primary border-r-0 py-2 rounded-l-md focus:outline-none placeholder-gray-300 '
                      />

                      <button className='bg-primary border border-primary text-white px-4 rounded-r-md hover:text-primary hover:bg-transparent transition duration-300'>
                        Apply
                      </button>
                    </div>
                    <div className='flex justify-between text-gray-900 font-semibold'>
                      <p>Subtotal</p>
                      <p>
                        $
                        {cartItems.reduce(
                          (prev, current) => prev + current.price * current.qty,
                          0
                        )}
                      </p>
                    </div>
                    {cartItems.length && (
                      <div className='mt-6'>
                        <Link
                          to='/checkout'
                          onClick={cartCloseHandler}
                          className='flex justify-center items-center px-6 py-2 border border-primary text-black rounded-md shadow-sm text-sm uppercase font-black hover:text-white hover:bg-primary transition duration-200'
                        >
                          Checkout
                        </Link>
                      </div>
                    )}
                    <div className='mt-6 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        or{' '}
                        <button
                          type='button'
                          className='text-gray-600 font-medium hover:text-primary'
                          onClick={cartCloseHandler}
                        >
                          Continue Shopping
                          <span aria-hidden='true'> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
