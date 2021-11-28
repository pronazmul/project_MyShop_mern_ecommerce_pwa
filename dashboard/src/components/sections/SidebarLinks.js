import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { dashBoardDSidebarLinks } from './../data'

const SidebarLinks = () => {
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : 'dashboard'
  const [sidebarLink, setSidebarLink] = useState(dashBoardDSidebarLinks)
  const sidebarTogoller = (id) => {
    const updated = sidebarLink.map((item) => {
      if (item.id === id) {
        return { ...item, ['active']: !item.active }
      }
      return { ...item, ['active']: false }
    })
    setSidebarLink(updated)
  }

  useEffect(() => {
    if (redirect) {
      let nastedItem = sidebarLink.find(
        (item) =>
          item.nasted &&
          item.subCategory.map((a) => a.sublink).includes(redirect) &&
          item
      )
      if (nastedItem) {
        const updated = sidebarLink.map((item) => {
          if (item.id === nastedItem.id) {
            return { ...item, ['active']: true }
          } else {
            return { ...item, ['active']: false }
          }
        })
        setSidebarLink(updated)
      } else {
        return false
      }
    } else {
      return false
    }
  }, [])

  return (
    <div className='pr-3 rounded divide-y divide-gray-200  text-gray-600 pb-8'>
      {sidebarLink &&
        sidebarLink.map((item) => (
          <div key={item.id} className={`space-y-2 pl-10 py-4`}>
            {!item.nasted ? (
              <div
                className={`flex justify-between relative capitialize font-bold hover:text-primary focus-within:transition ${
                  redirect === item.sublink && 'text-primary'
                }`}
              >
                <Link to={`/?tab=${item.sublink}`}>
                  <i className={`${item.icon} absolute -left-8 top-1`}></i>
                  {item.name}
                </Link>
              </div>
            ) : (
              <>
                <div
                  onClick={() => sidebarTogoller(item.id)}
                  className={`flex justify-between relative capitialize font-bold hover:text-primary focus-within:transition cursor-pointer ${
                    item.active && 'text-primary'
                  }`}
                >
                  <span>
                    <i className={`${item.icon} absolute -left-8 top-1`}></i>
                    {item.name}
                  </span>
                  <span>
                    {item.active ? (
                      <i className='fas fa-minus'></i>
                    ) : (
                      <i className='fas fa-plus'></i>
                    )}
                  </span>
                </div>
                {item.active &&
                  item.subCategory.map((subitem) => (
                    <Link
                      to={`/?tab=${subitem.sublink}`}
                      className={
                        redirect === subitem.sublink
                          ? `capitialize block text-primary transition`
                          : `capitialize block hover:text-primary transition`
                      }
                    >
                      {subitem.name}
                    </Link>
                  ))}
              </>
            )}
          </div>
        ))}
    </div>
  )
}

export default SidebarLinks
