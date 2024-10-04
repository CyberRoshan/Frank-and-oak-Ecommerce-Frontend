import React from 'react'

export default function StoryHeroSection() {
  return (
    <section className='relative w-full lg:object-center object-right mt-12 h-[540px] text-white  lg:p-16 p-8 bg-[url("/images/ourstoryBanner.webp")] bg-cover' >
        <ul className='lg:block hidden space-y-3'>
            <li className='text-[13px] font-semibold cursor-pointer'>Our beginnings</li>
            <li className='text-[13px] font-semibold cursor-pointer'>Our values</li>
            <li className='text-[13px] font-semibold cursor-pointer'>Our sustainability goals</li>
            <li className='text-[13px] font-semibold cursor-pointer'>Our community & partners</li>
        </ul>
        <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <img className='w-[50px] mx-auto' src="https://cdn.shopify.com/s/files/1/0530/9517/0219/t/8/assets/pf-0598662a--Emblemsimple1white.svg?v=1613140901" alt="" />
            <h1 className='md:text-[90px] sm:text-[50px] text-[35px] font-medium md:leading-[120px] leading-normal'>Our Story</h1>
            <h3 className='sm:text-[34px] text-[20px] font-medium'>Designed in India.<br />
            Inspire Better Living.</h3>
        </div>
    </section>
  )
}
