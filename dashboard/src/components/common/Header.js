import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BadgeIcon from './../elements/BadgeIcon'
import DropDownMenu from './../elements/DropDownMenu'
import { userDropDownData } from './../data'

const Header = ({ dextopSidebar, setDextopSidebar, foatingSidebarHandler }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='bg-white shadow-sm'>
      <div className='py-2 px-3'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center w-full '>
            {/* Menu Show Hide Icon */}
            <div className='dextopMenuIcon hidden lg:block'>
              <button
                onClick={() => setDextopSidebar(!dextopSidebar)}
                className=''
              >
                {dextopSidebar ? (
                  <BadgeIcon icon='fas fa-angle-double-left' />
                ) : (
                  <BadgeIcon icon='fas fa-angle-double-right' />
                )}
              </button>
            </div>
            <div className='mobileMenuIcon lg:hidden'>
              <button onClick={foatingSidebarHandler} className=''>
                <BadgeIcon icon='fas fa-angle-double-right' />
              </button>
            </div>
            {/* Search */}
            <div className='max-w-2xl p-3 w-full relative'>
              <span className=' absolute left-7 text-gray-400  cursor-pointer hover:text-primary top-5'>
                <i className='fas fa-search'></i>
              </span>
              {searchQuery && (
                <span
                  onClick={() => setSearchQuery('')}
                  className=' absolute right-7 text-gray-400 cursor-pointer hover:text-primary top-5'
                >
                  <i className='fas fa-times'></i>
                </span>
              )}
              <input
                className='input-box rounded-2xl pl-10 py-2'
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className='flex items-center w-full justify-end'>
            {/* Icons */}
            <div className='flex items-center space-x-4 pr-4'>
              <Link to=''>
                <BadgeIcon icon='far fa-envelope' badge='1' />
              </Link>
              <Link to=''>
                <BadgeIcon icon='far fa-bell' badge='1' />
              </Link>
              <div className=''>
                <DropDownMenu data={userDropDownData}>
                  <img
                    className='w-10 h-10 rounded-full shadow-sm'
                    src='https://i.ibb.co/phfxcsS/pro-nazmul.webp'
                    alt='Brand Logo'
                  />
                </DropDownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
