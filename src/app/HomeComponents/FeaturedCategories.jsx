import React from 'react'

export default function FeaturedCategories() {
  return (
    <section className='max-w-[1460px] mx-auto py-[50px]'>
        <h3 className='md:text-[32px] text-[22px] font-medium'>Featured Categories</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 md:space-y-0 xs:space-y-8 space-y-12 py-[50px] md:gap-5 gap-3'>
            <div className='cursor-pointer '>
                <div className=' w-full h-full'>
                    <img className='w-full h-full object-cover' src="/images/womensDenim.webp" alt="Womens Denim" />
                <h5 className='text-[15px] mt-2 font-semibold'>Womens Denim</h5>
                </div>
            </div>
            <div className='cursor-pointer'>
                <div className=' w-full h-full'>
                    <img className=' w-full h-full object-cover' src="/images/WomensJackets.webp" alt="Womens Jackets" />
                <h5 className='text-[15px] mt-2 font-semibold'>Womens Jackets</h5>
                </div>
            </div>
            <div className='cursor-pointer'>
                <div className=' w-full h-full'>
                    <img className='w-full h-full object-cover' src="/images/MensDenims.webp" alt="Mens Denim" />
                <h5 className='text-[15px] mt-2 font-semibold'>Mens Denims</h5>
                </div>
            </div>
            <div className='cursor-pointer'>
                <div className=' w-full h-full'>
                    <img className='w-full h-full object-cover' src="/images/MensJackets.webp" alt="Mens Jackets" />
                <h5 className='text-[15px] mt-2 font-semibold'>Mens Jackets</h5>
                </div>
            </div>
        </div>
    </section>
  )
}