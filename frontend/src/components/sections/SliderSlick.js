import React from 'react'
import Slider from 'react-slick'
import { dummySlider } from './../dummyData/data'

export default function SliderSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: 'button__bar',
  }

  return (
    <Slider {...settings}>
      {dummySlider.map((item) => (
        <div className=''>
          <img src={item.img} alt='' className='rounded' />
        </div>
      ))}
    </Slider>
  )
}
