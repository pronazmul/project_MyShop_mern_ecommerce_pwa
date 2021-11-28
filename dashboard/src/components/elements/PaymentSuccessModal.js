import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PaymentSuccessModal({ success }) {
  let [isOpen, setIsOpen] = useState(success ? true : false)
  const modalHandler = () => setIsOpen(!isOpen)
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={modalHandler}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-lg ' />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-3'>
                <div className='bg-green-400 w-16 h-16 rounded-full mx-auto mb-6 text-white relative text-4xl'>
                  <i className='fas fa-check absolute inset-0 flex items-center justify-center'></i>
                </div>
                <h3 className='text-xl font-black text-gray-600 text-center'>
                  Payment Successfull
                </h3>
                <div className='w-full flex justify-center border-none'>
                  <Link
                    to='/'
                    className='w-3/4 rounded bg-primary text-white py-2 font-semibold text-sm text-center '
                    onClick={modalHandler}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
