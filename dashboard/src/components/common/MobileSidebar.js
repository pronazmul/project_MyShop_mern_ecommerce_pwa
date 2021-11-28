import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import SidebarLinks from '../sections/SidebarLinks'
import BadgeIcon from '../elements/BadgeIcon'

const MobileSidebar = ({ floatingSidebar, foatingSidebarHandler }) => {
  return (
    <Transition.Root show={floatingSidebar ? true : false} as={Fragment}>
      <Dialog
        as='div'
        className='absolute z-30 inset-0 overflow-hidden lg:hidden'
        onClose={foatingSidebarHandler}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='absolute h-screen inset-0 bg-gray-500 bg-opacity-50 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-y-0 left-0 pl-30 w-3/4 sm:w-2/4 md:w-2/4 flex'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration:500'
            enterFrom='-translate-x-10'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration:500'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-10'
          >
            <div className='w-screen max-w-sm'>
              <div className='h-full flex flex-col bg-white shadow-xl '>
                <div
                  className='flex-1 py-6 px-4 sm:px-6 overflow-y-scroll'
                  id='sidebar-scroll'
                >
                  <div className='flex items-start justify-between'>
                    <Link className='' to=''>
                      <img
                        className='w-32'
                        src='/images/logo/logo.png'
                        alt='Brand Logo'
                      />
                    </Link>
                    <div className='ml-3 h-7 flex items-center'>
                      <button
                        className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                        onClick={foatingSidebarHandler}
                      >
                        <BadgeIcon icon='fa fa-times' />
                      </button>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <SidebarLinks />
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileSidebar
