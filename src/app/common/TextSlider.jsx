import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
export default function TextSlider() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    nav:false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className='w-full bg-black sm:py-1 py-0.5'>
        <div className="slider-container text-center">
      <Slider {...settings}>
        <div>
        <h4 className='text-white font-semibold sm:text-sm text-[10px]'>Our loyalty program just got better! Explore the new perks</h4>
        </div>
        <div>
        <h4 className='text-white font-semibold sm:text-sm text-[10px]'>The Skyline: A cult favourite. Shop Women Shop Men</h4>
          
        </div>
        <div>
        <h4 className='text-white font-semibold sm:text-sm text-[10px]'>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h4>
          
        </div>
        <div>
        <h4 className='text-white font-semibold sm:text-sm text-[10px]'>Enjoy free shipping on orders over $99 and free returns</h4>
          
        </div>
      </Slider>
    </div>
    </div>
  )
}
