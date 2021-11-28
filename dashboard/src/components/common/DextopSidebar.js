import React from 'react'
import { Link } from 'react-router-dom'
import SidebarLinks from '../sections/SidebarLinks'

const DextopSidebar = () => {
  return (
    <div
      className='bg-white shadow-sm h-full overflow-y-scroll'
      id='sidebar-scroll'
    >
      {/* Logo */}
      <div className='w-full p-6 flex justify-between'>
        <Link className='' to=''>
          <img className='w-32' src='/images/logo/logo.png' alt='Brand Logo' />
        </Link>
      </div>
      {/* Sidebar Links */}
      <div className=''>
        <SidebarLinks />
      </div>
    </div>
  )
}

export default DextopSidebar
