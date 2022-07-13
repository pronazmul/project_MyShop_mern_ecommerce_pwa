import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()
  const breadcrumbUrl = location.pathname.split('/').filter((item) => item)

  return breadcrumbUrl.length && breadcrumbUrl.length === 1 ? (
    <div className='container pt-4 flex items-center gap-3 capitalize'>
      <Link to='/' className='text-primary '>
        <i className='fas fa-home'></i>
      </Link>
      <span className='text-sm text-gray-400'>
        <i className='fas fa-chevron-right'></i>
      </span>
      <p className='text-gray-600 font-bold'>{breadcrumbUrl[0]}</p>
    </div>
  ) : (
    breadcrumbUrl.length == 2 && (
      <div className='container pt-4 flex items-center gap-3 capitalize'>
        <Link to='/' className='text-primary '>
          <i className='fas fa-home'></i>
        </Link>
        <span className='text-sm text-gray-400'>
          <i className='fas fa-chevron-right'></i>
        </span>
        <Link to={`/${breadcrumbUrl[0]}`} className='text-primary '>
          <p className='text-primary font-bold'>{breadcrumbUrl[0]}</p>
        </Link>
        <span className='text-sm text-gray-400'>
          <i className='fas fa-chevron-right'></i>
        </span>
        <p className='text-gray-600 font-bold'>{breadcrumbUrl[1]}</p>
      </div>
    )
  )
}

export default Breadcrumb

{
  /* <div className='container py-4 flex items-center gap-3'>
<Link to='/' className='text-primary '>
  <i className='fas fa-home'></i>
</Link>
<span className='text-sm text-gray-400'>
  <i className='fas fa-chevron-right'></i>
</span>
<p className='text-gray-600 font-bold'>Shop</p>
</div> */
}
