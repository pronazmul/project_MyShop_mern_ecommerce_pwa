import React from 'react'

const BadgeIcon = ({ icon, badge }) => {
  return (
    <i
      className={`${icon} h-9 w-9 flex justify-center items-center relative hover:text-primary transition duration-300 text-gray-500 hover:bg-gray-200 rounded-full cursor-pointer`}
    >
      {badge && (
        <span className='absolute right-0 top-0 bg-primary rounded-full w-3 h-3 text-xs text-white flex justify-center items-center'>
          {badge}
        </span>
      )}
    </i>
  )
}

export default BadgeIcon
