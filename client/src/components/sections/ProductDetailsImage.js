import React, { useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'

const ProductDetailsImage = ({ images }) => {
  const [mainImage, setMainImage] = useState(images && images[0])

  return (
    <>
      <InnerImageZoom
        src={mainImage}
        zoomSrc={mainImage}
        alt='Single Products'
        className='w-full rounded shadow-sm'
        zoomType='hover'
        zoomPreload={true}
      />
      <div className='grid grid-cols-5 mt-4 gap-4'>
        {images.map((image) => (
          <img
            src={image}
            onClick={() => setMainImage(image)}
            alt=''
            className={` w-full rounded cursor-pointer border ${
              mainImage === image && 'border-primary'
            }`}
          />
        ))}
      </div>
    </>
  )
}

export default ProductDetailsImage
