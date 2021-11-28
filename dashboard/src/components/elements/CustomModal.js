import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const CustomModal = ({ open, modalHandler, children }) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
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
              <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-sm ' />
            </Transition.Child>
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
              {children}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default CustomModal

/*
@ Custom Modal
@ param: open, modalHandler, children
-> open Boolean [true, false]
-> modalHandler (function to close modal)
-> children (To define Modal Body)
*/
