import React from 'react'

const NotificationScreen = () => {
  return (
    <div className='container py-4 h-screen'>
      <div className=' px-4 shadow rounded flex flex-col  items-center py-6 space-y-1'>
        <img
          src='/images/notification.png'
          alt='Profile Image'
          className='rounded-full w-24 h-24 border border-gray-200 p-1 object-cover'
        />
        <h4 className='text-gray-600 text-base font-black'>
          No notifications yet
        </h4>
        <p className='text-gray-600 text-xs'>
          Stay turned! Notification about your activity will show up here
        </p>
      </div>
    </div>
  )
}

export default NotificationScreen
