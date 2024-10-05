import { Card } from '@/app/common/Card';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
export default function Search() {
  return (
    <section className='mt-20 w-full'>
        <form className='fixed z-[99999] bg-white w-full border-y-2 border-customBorder flex flex-row gap-3 items-center px-5'>
            <input className='w-full py-5 text-[18px] text-black border-none font-medium outline-none focus:border-none focus:ring-0' type="search" placeholder='Search' />
            <button className='sm:px-4 px-3 sm:py-2 py-1.5 rounded-full border border-black flex items-center justify-center'><BsArrowRight size={25} /></button>
        </form>
        <div className='grid lg:grid-cols-[20%_auto] md:grid-cols-[35%_auto] grid-cols-1 md:px-5 px-3 pt-24 py-5'>
            <div className='w-full md:h-screen h-full'>
                <div className='border-b border-[#E2E9E7] mx-4 pb-6'>
                    <h4 className='text-[18px] font-medium pb-3'>Recently Searched</h4>
                    <ul className='space-y-2'>
                        <li className='text-[13px] cursor-pointer font-semibold hover:underline'>"gym"</li>
                        <li className='text-[13px] cursor-pointer font-semibold hover:underline'>"jeans"</li>
                        <li className='text-[13px] cursor-pointer font-semibold hover:underline'>"skyline"</li>
                        <li className='text-[13px] cursor-pointer font-semibold hover:underline'>"tops"</li>
                    </ul>
                </div>
                <div className='mx-4 pb-6 pt-5'>
                    <h4 className='text-[18px] font-medium pb-3'>Trending Searches</h4>
                    <ul className=' flex flex-wrap items-center gap-2.5'>
                        <li><button className='border border-black p-1.5 text-[13px] font-semibold bg-white text-black hover:bg-black hover:text-white duration-300'>Sweaters</button></li>
                        <li><button className='border border-black p-1.5 text-[13px] font-semibold bg-white text-black hover:bg-black hover:text-white duration-300'>Skyline</button></li>
                        <li><button className='border border-black p-1.5 text-[13px] font-semibold bg-white text-black hover:bg-black hover:text-white duration-300'>Jackets</button></li>
                        <li><button className='border border-black p-1.5 text-[13px] font-semibold bg-white text-black hover:bg-black hover:text-white duration-300'>Shirts</button></li>
                        <li><button className='border border-black p-1.5 text-[13px] font-semibold bg-white text-black hover:bg-black hover:text-white duration-300'>Denim</button></li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-screen overflow-y-scroll scrollbar-hide'>
                <h4 className='text-[18px] font-medium pb-2'>Recently Searched</h4>
                <div className='py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    </section>
  )
}
