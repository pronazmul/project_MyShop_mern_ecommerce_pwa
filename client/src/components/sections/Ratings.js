import React from 'react'

const Rattings = ({ rating }) => {
  return (
    <>
      <div className=' flex gap-0.5 text-xs'>
        {[0, 1, 2, 3, 4].map((value) => (
          <span>
            <i
              className={
                rating && Math.floor(rating) > value
                  ? `text-yellow-400 fas fa-star`
                  : rating % 1 !== 0 && rating > value
                  ? `text-yellow-400 fas fa-star-half-alt`
                  : `text-gray-400 far fa-star`
              }
            ></i>
          </span>
        ))}
      </div>
    </>
  )
}

export default Rattings
