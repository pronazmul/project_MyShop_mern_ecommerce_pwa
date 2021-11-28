import React from 'react'

const CustomPagination = ({
  pages: p,
  currentPage,
  setCurrentPage,
  totalData,
  startAt,
  endAt,
}) => {
  const pages = [...Array(p)].map((x, y) => y + 1)
  return (
    <div className='p-4 border-t border-gray-300 bg-white'>
      <div className='flex justify-between items-baseline'>
        <div className=''>
          <p className='text-gray-500 text-xs lg:text-sm'>
            {`Showing ${startAt ? startAt + 1 : 1} to ${endAt}
            of ${totalData.length} Entities`}
          </p>
        </div>
        <div className='flex justify-end items-baseline select-none'>
          <button
            className={`h-9 w-9 flex justify-center items-center relative transition duration-300 text-gray-500  ${
              currentPage === 1
                ? 'cursor-not-allowed'
                : 'rounded-full cursor-pointer hover:text-primary hover:bg-gray-200'
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            <i className='fas fa-chevron-left' />
          </button>
          {pages.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`h-9 w-9 flex justify-center items-center relative transition duration-300 text-gray-500 rounded-full cursor-pointer hover:text-primary hover:bg-gray-200 ${
                item === currentPage && 'text-primary bg-gray-200 font-bold'
              }`}
            >
              <p>{item}</p>
            </button>
          ))}
          <button
            className={`h-9 w-9 flex justify-center items-center relative transition duration-300 text-gray-500  ${
              currentPage === pages.length
                ? 'cursor-not-allowed'
                : 'rounded-full cursor-pointer hover:text-primary hover:bg-gray-200'
            }`}
            onClick={() =>
              currentPage < pages.length && setCurrentPage(currentPage + 1)
            }
          >
            <i className='fas fa-chevron-right' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomPagination

/*
@Custom Pagination With Current Index Entities:
@Required Parameters: 
-> pages {Number of Pages}
-> currentPage {Current Selected Page}
-> setCurrentPage {UseState Mathed to set current page}
-> totalData {Total Number of array}
-> startAt {Number of start showing index}
-> endAt {Number of end showing index}
*/
