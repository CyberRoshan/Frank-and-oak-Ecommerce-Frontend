import React from 'react'

export default function AboutStory() {
  return (
    <section className='bg-[#455F57] w-full lg:py-10 lg:px-10 px-5 py-5  grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-5'>
        <div className='relative'>
            <img className='w-fulll h-full object-center' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/Who_we_are_c16177ec-409a-4524-92d4-966f83134ca7.jpg?v=1712764410" alt="" />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-45'></div>
            <div className='absolute  top-0 h-full flex justify-between flex-col md:py-10 py-5 lg:ps-10 ps-5 text-white'>
                <h4 className='lg:text-[40px] text-[32px] font-semibold'>Who We Are</h4>
                <p className='lg:text-[24px] text-[18px] font-semibold'>Learn More</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-full h-full object-center' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/Sustainable_practices_a1ac0868-0658-44db-8b70-1c3839dcfbb0.jpg?v=1712764410" alt="" />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-45'></div>
            <div className='absolute  top-0 h-full flex justify-between flex-col md:py-10 py-5 lg:ps-10 ps-5 text-white'>
                <h4 className='lg:text-[40px] text-[32px] font-semibold'>Sustainable Practices</h4>
                <p className='lg:text-[24px] text-[18px] font-semibold'>Learn More</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-full h-full object-center' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/Design_Philosophy.jpg?v=1712764411" alt="" />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-45'></div>
            <div className='absolute  top-0 h-full flex justify-between flex-col md:py-10 py-5 lg:ps-10 ps-5 text-white'>
                <h4 className='lg:text-[40px] text-[32px] font-semibold'>Design Philosophy</h4>
                <p className='lg:text-[24px] text-[18px] font-semibold'>Learn More</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-full h-full object-center' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/Fabric_innovation_2.jpg?v=1712765020" alt="" />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-45'></div>
            <div className='absolute  top-0 h-full flex justify-between flex-col md:py-10 py-5 lg:ps-10 ps-5 text-white'>
                <h4 className='lg:text-[40px] text-[32px] font-semibold'>Fabrics Innovation</h4>
                <p className='lg:text-[24px] text-[18px] font-semibold'>Learn More</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-full h-full object-center' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/Circular_denim_ec81db95-1661-4db6-9b1c-24086cbfdbd5.jpg?v=1712764771" alt="" />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-45'></div>
            <div className='absolute  top-0 h-full flex justify-between flex-col md:py-10 py-5 lg:ps-10 ps-5 text-white'>
                <h4 className='lg:text-[40px] text-[32px] font-semibold'>Circular denim™</h4>
                <p className='lg:text-[24px] text-[18px] font-semibold'>Learn More</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-full h-full object-center' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/Partners_and_Factories.jpg?v=1712764411" alt="" />
            <div className='w-full h-full bg-black absolute top-0 left-0 opacity-45'></div>
            <div className='absolute  top-0 h-full flex justify-between flex-col md:py-10 py-5 lg:ps-10 ps-5 text-white'>
                <h4 className='lg:text-[40px] text-[32px] font-semibold'>Partners and Factories</h4>
                <p className='lg:text-[24px] text-[18px] font-semibold'>Learn More</p>
            </div>
        </div>
    </section>
  )
}
