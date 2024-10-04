import React from 'react'
export default function Banner() {
  return (
    <section className='w-full mt-10'>
        <div className='h-full  relative'>
            <img className='md:block hidden w-full h-full' src="/images/banner.webp" alt="Banner" />
            <img className='md:hidden mt-10 block w-full h-full' src="/images/BannerMobile.webp" alt="Banner" />
            <div className='absolute z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                <h2 className='text-[44px] md:text-[78px] tracking-tighter font-semibold leading-tight  text-white md:text-black'>Fall 2024</h2>
                <h3 className='text-[20px] md:text-black text-white md:text-[30px] font-medium tracking-tight'>The new classics.</h3>
                <div className='md:space-x-7 space-y-5 mt-6'>
                    <button className='py-3 md:inline block px-12 md:px-14 text-white bg-black text-[18px] font-normal'>Women</button>
                    <button className='py-3 md:inline block px-[62px] md:px-16 text-white bg-black text-[18px] font-normal'>Men</button>
                </div>
            </div>
            <BannerFeatures/>
        </div>
    </section>
  )
}


function BannerFeatures() {
  return (
    <div className='w-full  bg-black text-white py-4'>
        <ul className='flex md:space-x-20 space-x-0 justify-center md:items-start items-center md:gap-y-0 gap-y-3  flex-wrap'>
            <li className='flex md:basis-auto basis-[50%] sm:justify-normal md:justify-center items-center gap-2'>
                <img className='w-5 h-5' src="/images/truck.png" alt="" />
                <span className=' text-[12px] sm:text-[14px] font-medium'>Free Shipping over $99</span>
            </li>
            <li className='flex md:basis-auto basis-[50%] sm:justify-normal md:justify-center items-center gap-2'>
                <img className='w-5 h-5' src="/images/return.png" alt="" />
                <span className=' text-[12px] sm:text-[14px] font-medium'>Free Returns</span>
            </li>
            <li className='flex md:basis-auto basis-[50%] sm:justify-normal md:justify-center items-center gap-2'>
                <img className='w-5 h-5' src="/images/earnpoints.webp" alt="" />
                <span className=' text-[12px] sm:text-[14px] font-medium'>Earn Points</span>
            </li>
            <li className='flex md:basis-auto basis-[50%] sm:justify-normal md:justify-center items-center gap-2'>
                <img className='w-5 h-5' src="/images/Sezzle.webp" alt="" />
                <span className=' text-[12px] sm:text-[14px] font-medium'>Buy Now, Pay Later</span>
            </li>
        </ul>
    </div>
  )
}
