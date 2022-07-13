/**
 * Title : Toast Notification For React Tailwind Css
 * Reqired Params : color:['red','green'], title, children | description.
 * description: Toaster will close automatically after 2 seconds
 */

/*
@ Call Toster
<ToastNotification color='red' title='Error' show={true}>Something Went Wrong!</ToastNotification>
*/
import { useState, useEffect, Fragment } from 'react'
import { Transition } from '@headlessui/react'

export default function ToastNotification({
  color = 'green',
  title,
  show,
  children,
}) {
  const [viewToast, setViewToast] = useState(show ? true : true)
  const delay = 2
  useEffect(() => {
    let timer1 = setTimeout(() => setViewToast(false), delay * 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <Transition
      show={viewToast}
      as={Fragment}
      enter='duration-500 ease-out'
      enterFrom='opacity-0 scale-75'
      enterTo='opacity-50 scale-100'
      leave='duration-300 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-75'
    >
      <div className='absolute right-0 top-0'>
        <div class='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md'>
          <div class={`flex items-center justify-center w-8 bg-${color}-500`}>
            <svg
              class='w-4 h-4 text-white fill-current'
              viewBox='0 0 40 40'
              xmlns='http://www.w3.org/2000/svg'
            >
              {color === 'green' && (
                <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z' />
              )}
              {color === 'red' && (
                <path d='M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z' />
              )}
            </svg>
          </div>
          <div class='px-2 py-1 '>
            <div class='lg:mx-2 mx-1'>
              <span
                class={`font-semibold text-sm text-${color}-500 dark:text-green-400`}
              >
                {title}
              </span>
              <p class='text-xs text-gray-600 dark:text-gray-200'>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}
