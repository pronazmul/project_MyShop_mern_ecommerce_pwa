import React from 'react'
import { useLocation } from 'react-router-dom'
import AccountSidebar from '../sections/AccountSidebar'
import ChangePassword from '../sections/ChangePassword'
import ShippingInfo from '../sections/ShippingInfo'
import Breadcrumb from './../sections/Breadcrumb'
import WishlistSection from './../sections/WishlistSection'
import OrdersSection from './../sections/OrdersSection'
import BasicInfo from './../sections/BasicInfo'
import CancellationsSection from './../sections/CancellationsSection'
import ReturnSection from './../sections/ReturnSection'
import ReviewSection from './../sections/ReviewSection'
import VoucharSection from './../sections/VoucharSection'
import PaymentSection from './../sections/PaymentSection'
import { useSelector } from 'react-redux'

const AccountScreen = () => {
  const location = useLocation()
  const redirect = location.search.split('=')[1]
  const renderSection = (params) => {
    switch (params) {
      case 'account':
        return <BasicInfo />
      case 'shipping':
        return <ShippingInfo />
      case 'password':
        return <ChangePassword />
      case 'orders':
        return <OrdersSection />
      case 'returns':
        return <ReturnSection />
      case 'cancellations':
        return <CancellationsSection />
      case 'reviews':
        return <ReviewSection />
      case 'paymentMethods':
        return <PaymentSection />
      case 'vouchers':
        return <VoucharSection />
      case 'wishlist':
        return <WishlistSection />
      default:
        return <BasicInfo />
    }
  }
  const { userInfo } = useSelector((state) => state.userLogin)
  return (
    <div className=''>
      <div className='md:block hidden '>
        <Breadcrumb />
      </div>
      <div className='container grid grid-cols-12  items-stretch gap-4 pt-6 pb-16'>
        {/* Sidebar */}
        <div className='md:col-span-3 col-span-12 '>
          <AccountSidebar userInfo={userInfo} />
        </div>
        {/* Content Section */}
        <div className='md:col-span-9 col-span-12 gap-4 space-y-3'>
          {renderSection(redirect)}
        </div>
      </div>
    </div>
  )
}

export default AccountScreen
