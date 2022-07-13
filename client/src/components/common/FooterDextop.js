import React from 'react'

const FooterDextop = () => {
  return (
    <div className='md:block hidden'>
      <footer className='bg-white pt-4 pb-8 border-t border-gray-100'>
        <div className='container grid grid-cols-3 space-y-6 text-xs lg:text-sm'>
          <div className='col-span-1 pr-3'>
            <img src='/images/logo.png' alt='' className='w-2/3 ' />
            <p className='text-gray-500 leading-6 '>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate.
            </p>
            <div className=' flex space-x-6 justify-center md:justify-start text-lg mt-8'>
              <a
                href='#'
                className='text-gray-400 hover:text-gray-600 transition duration-300 '
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-gray-600 transition duration-300'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-gray-600 transition duration-300'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-gray-600 transition duration-300'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-6'>
            <div className=' grid grid-cols-2 gap-6'>
              <div>
                <h2 className='text-md font-bold text-gray-400 uppercase tracking-wider'>
                  Solutions
                </h2>
                <div className='mt-4 space-y-2 lg:space-y-4'>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Marketing
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Analytics
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Commerce
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h2 className='text-md font-bold text-gray-400 uppercase tracking-wider'>
                  Support
                </h2>
                <div className='mt-4 space-y-2 lg:space-y-4'>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Pricing
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Documentation
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Guides
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div className=' grid grid-cols-2 gap-6'>
              <div>
                <h2 className='font-bold text-gray-400 uppercase tracking-wider'>
                  Company
                </h2>
                <div className='mt-4 space-y-2 lg:space-y-4'>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Blog
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Jobs
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Press
                  </a>
                </div>
              </div>
              <div>
                <h2 className='text-md font-bold text-gray-400 uppercase tracking-wider'>
                  Legal
                </h2>
                <div className='mt-4 space-y-2 lg:space-y-4'>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Claim
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Privacy
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    Policy
                  </a>
                  <a
                    href='#'
                    className='text-gray-500 hover:text-gray-800 block'
                  >
                    terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-gray-800 py-4'>
        <div className='container flex items-center justify-between '>
          <p className='text-gray-300 text-xs lg:text-sm font-semibold'>
            @ MYSHOP - All Rights Reserved
          </p>
          <img
            src='/images/methods.png'
            alt='Payment Methods'
            className='h-5'
          />
        </div>
      </div>
    </div>
  )
}

export default FooterDextop
