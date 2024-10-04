import React from 'react'

export default function BetterLiving() {
  return (
    <section className='max-w-[1450px] mx-auto py-[50px] grid md:grid-cols-[40%_55%] sm:grid-cols-1 md:gap-0 gap-10 items-center justify-between lg:px-0 md:px-5 px-2'>
        <div>
            <h2 className='lg:text-[48px] text-[30px] font-medium mb-8'>Inspire Better Living.</h2>
            <p className='lg:text-[25px] text-[20px] font-semibold leading-9 mb-6 text-[#666]'>Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.</p>
            <a href="#" className='lg:text-[28px] text-[22px] font-medium  underline underline-offset-2'>Who We Are</a>
        </div>
        <div className='grid grid-cols-2 gap-5 '>
            <div className='relative '>
                <img className='w-full h-full object-cover' src="images/sustainable.webp" alt="Sustainable Practices" />
                <h4 className='absolute sm:bottom-8 sm:left-6 bottom-4 left-3 md:text-[22px] text-[16px] font-medium text-white'>Sustainable Practices</h4>
            </div>
            <div className='relative'>
                <img className='w-full h-full object-cover' src="images/philosphy.jpg" alt="Design Philosophy" />
                <h4 className='absolute sm:bottom-8 sm:left-6 bottom-4 left-3 md:text-[22px] text-[16px] font-medium text-white'>Design Philosophy</h4>
            </div>
            <div className='relative'>
                <img className='w-full h-full object-cover' src="images/fabric.jpg" alt="Fabrics Innovation" />
                <h4 className='absolute sm:bottom-8 sm:left-6 bottom-4 left-3 md:text-[22px] text-[16px] font-medium text-white'>Fabrics Innovation</h4>
            </div>
            <div className='relative'>
                <img className='w-full h-full object-cover' src="images/Factories.webp" alt="Partners and Factories" />
                <h4 className='absolute sm:bottom-8 sm:left-6 bottom-4 left-3 md:text-[22px] text-[16px] font-medium text-white'>Partners and Factories</h4>
            </div>
        </div>
    </section>
  )
}
