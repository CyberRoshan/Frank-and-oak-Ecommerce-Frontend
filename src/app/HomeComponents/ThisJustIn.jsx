"use client"
import React, { useState } from 'react'
import { Card } from '../common/Card';

export default function ThisJustIn() {
    let [quickAdd,setQuickAdd]=useState(false)
  return (
    <section className='max-w-[1460px] mx-auto py-[50px]'>
        <h3 className='md:text-[32px] text-[22px] font-medium'>This Just In</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 py-[50px] md:gap-5 gap-3'>
            {/* <div className='cursor-pointer group'>
                <div className=' w-full h-full'>
                    <div className='group relative'>
                <span className='bg-black text-white absolute right-2 top-2 z-[9999] text-[10px] font-medium uppercase px-1 py-0.5'>few left</span>
                    <img className='h-full w-full object-cover' src="/images/buttonUpSweater.webp" alt="Womens Denim" />
                    <img className='h-full w-full z-[999] absolute top-0 group-hover:block hidden object-cover' src="/images/buttonUpSweater2.webp" alt="Womens Denim" />
                    <button onClick={()=>setQuickAdd(true)} className={`${setQuickAdd ? <QuickAddButton/> : ""} w-[95%] text-center box-border bg-white py-3 text-[14px] font-medium absolute bottom-2 translate-x-[-50%] left-[50%]  group-hover:block hidden`}>Quick Add
                    </button>
                    </div>
                <h5 className='text-[14px] flex gap-3 mt-2 font-semibold'>The Button-Up Sweater Vest in Space Blue
                    <span className=' rounded-full hover:bg-[#EBECEE] h-7 w-7 p-1'>
                <svg className='w-5 h-5 ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3666 3.84123C16.941 3.4154 16.4356 3.07761 15.8794 2.84714C15.3232 2.61667 14.727 2.49805 14.1249 2.49805C13.5229 2.49805 12.9267 2.61667 12.3705 2.84714C11.8143 3.07761 11.3089 3.4154 10.8833 3.84123L9.99994 4.72457L9.1166 3.84123C8.25686 2.98149 7.0908 2.49849 5.87494 2.49849C4.65907 2.49849 3.49301 2.98149 2.63327 3.84123C1.77353 4.70098 1.29053 5.86704 1.29053 7.0829C1.29053 8.29876 1.77353 9.46482 2.63327 10.3246L3.5166 11.2079L9.99994 17.6912L16.4833 11.2079L17.3666 10.3246C17.7924 9.89894 18.1302 9.39358 18.3607 8.83736C18.5912 8.28115 18.7098 7.68497 18.7098 7.0829C18.7098 6.48083 18.5912 5.88465 18.3607 5.32844C18.1302 4.77222 17.7924 4.26686 17.3666 3.84123Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                </h5>
                <div className='text-[14px] font-medium mt-3'>$89.50</div>
                <span className='group-hover:hidden block'>1 color</span>
                <div className='group-hover:block hidden mt-1'>
                <div className='w-5 h-5 rounded-full border border-black flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3.5 h-3.5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                </div>
                </div>
                </div>
            </div>
            <div className='cursor-pointer group'>
                <div className=' w-full h-full'>
                    <div className='group relative'>
                    <span className='bg-black text-white absolute right-2 top-2 z-[9999] text-[10px] font-medium uppercase px-1 py-0.5'>few left</span>
                    <img className='h-full w-full object-cover' src="/images/buttonUpSweater.webp" alt="Womens Denim" />
                    <img className='h-full w-full z-[999] absolute top-0 group-hover:block hidden object-cover' src="/images/buttonUpSweater2.webp" alt="Womens Denim" />
                    <button onClick={()=>setQuickAdd(true)} className={`${setQuickAdd ? <QuickAddButton/> : ""} w-[95%] text-center box-border bg-white py-3 text-[14px] font-medium absolute bottom-2 translate-x-[-50%] left-[50%]  group-hover:block hidden`}>Quick Add
                    </button>
                    </div>
                <h5 className='text-[14px] flex gap-3 mt-2 font-semibold'>The Button-Up Sweater Vest in Space Blue
                    <span className=' rounded-full hover:bg-[#EBECEE] h-7 w-7 p-1'>
                <svg className='w-5 h-5 ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3666 3.84123C16.941 3.4154 16.4356 3.07761 15.8794 2.84714C15.3232 2.61667 14.727 2.49805 14.1249 2.49805C13.5229 2.49805 12.9267 2.61667 12.3705 2.84714C11.8143 3.07761 11.3089 3.4154 10.8833 3.84123L9.99994 4.72457L9.1166 3.84123C8.25686 2.98149 7.0908 2.49849 5.87494 2.49849C4.65907 2.49849 3.49301 2.98149 2.63327 3.84123C1.77353 4.70098 1.29053 5.86704 1.29053 7.0829C1.29053 8.29876 1.77353 9.46482 2.63327 10.3246L3.5166 11.2079L9.99994 17.6912L16.4833 11.2079L17.3666 10.3246C17.7924 9.89894 18.1302 9.39358 18.3607 8.83736C18.5912 8.28115 18.7098 7.68497 18.7098 7.0829C18.7098 6.48083 18.5912 5.88465 18.3607 5.32844C18.1302 4.77222 17.7924 4.26686 17.3666 3.84123Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                </h5>
                <div className='text-[14px] font-medium mt-3'>$89.50</div>
                <span className='group-hover:hidden block'>1 color</span>
                <div className='group-hover:block hidden mt-1'>
                <div className='w-5 h-5 rounded-full border border-black flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3.5 h-3.5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                </div>
                </div>
                </div>
            </div>
            <div className='cursor-pointer group'>
                <div className=' w-full h-full'>
                    <div className='group relative'>
                    <span className='bg-black text-white absolute right-2 top-2 z-[9999] text-[10px] font-medium uppercase px-1 py-0.5'>few left</span>
                    <img className='h-full w-full object-cover' src="/images/buttonUpSweater.webp" alt="Womens Denim" />
                    <img className='h-full w-full z-[999] absolute top-0 group-hover:block hidden object-cover' src="/images/buttonUpSweater2.webp" alt="Womens Denim" />
                    <button onClick={()=>setQuickAdd(true)} className={`${setQuickAdd ? <QuickAddButton/> : ""} w-[95%] text-center box-border bg-white py-3 text-[14px] font-medium absolute bottom-2 translate-x-[-50%] left-[50%]  group-hover:block hidden`}>Quick Add
                    </button>
                    </div>
                <h5 className='text-[14px] flex gap-3 mt-2 font-semibold'>The Button-Up Sweater Vest in Space Blue
                    <span className=' rounded-full hover:bg-[#EBECEE] h-7 w-7 p-1'>
                <svg className='w-5 h-5 ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3666 3.84123C16.941 3.4154 16.4356 3.07761 15.8794 2.84714C15.3232 2.61667 14.727 2.49805 14.1249 2.49805C13.5229 2.49805 12.9267 2.61667 12.3705 2.84714C11.8143 3.07761 11.3089 3.4154 10.8833 3.84123L9.99994 4.72457L9.1166 3.84123C8.25686 2.98149 7.0908 2.49849 5.87494 2.49849C4.65907 2.49849 3.49301 2.98149 2.63327 3.84123C1.77353 4.70098 1.29053 5.86704 1.29053 7.0829C1.29053 8.29876 1.77353 9.46482 2.63327 10.3246L3.5166 11.2079L9.99994 17.6912L16.4833 11.2079L17.3666 10.3246C17.7924 9.89894 18.1302 9.39358 18.3607 8.83736C18.5912 8.28115 18.7098 7.68497 18.7098 7.0829C18.7098 6.48083 18.5912 5.88465 18.3607 5.32844C18.1302 4.77222 17.7924 4.26686 17.3666 3.84123Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                </h5>
                <div className='text-[14px] font-medium mt-3'>$89.50</div>
                <span className='group-hover:hidden block'>1 color</span>
                <div className='group-hover:block hidden mt-1'>
                <div className='w-5 h-5 rounded-full border border-black flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3.5 h-3.5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                </div>
                </div>
                </div>
            </div>
            <div className='cursor-pointer group'>
                <div className=' w-full h-full'>
                    <div className='group relative'>
                    <span className='bg-black text-white absolute right-2 top-2 z-[9999] text-[10px] font-medium uppercase px-1 py-0.5'>few left</span>
                    <img className='h-full w-full object-cover' src="/images/buttonUpSweater.webp" alt="Womens Denim" />
                    <img className='h-full w-full z-[999] absolute top-0 group-hover:block hidden object-cover' src="/images/buttonUpSweater2.webp" alt="Womens Denim" />
                    <button onClick={()=>setQuickAdd(true)} className={`${setQuickAdd ? <QuickAddButton/> : ""} w-[95%] text-center box-border bg-white py-3 text-[14px] font-medium absolute bottom-2 translate-x-[-50%] left-[50%]  group-hover:block hidden`}>Quick Add
                    </button>
                    </div>
                <h5 className='text-[14px] flex gap-3 mt-2 font-semibold'>The Button-Up Sweater Vest in Space Blue
                    <span className=' rounded-full hover:bg-[#EBECEE] h-7 w-7 p-1'>
                <svg className='w-5 h-5 ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3666 3.84123C16.941 3.4154 16.4356 3.07761 15.8794 2.84714C15.3232 2.61667 14.727 2.49805 14.1249 2.49805C13.5229 2.49805 12.9267 2.61667 12.3705 2.84714C11.8143 3.07761 11.3089 3.4154 10.8833 3.84123L9.99994 4.72457L9.1166 3.84123C8.25686 2.98149 7.0908 2.49849 5.87494 2.49849C4.65907 2.49849 3.49301 2.98149 2.63327 3.84123C1.77353 4.70098 1.29053 5.86704 1.29053 7.0829C1.29053 8.29876 1.77353 9.46482 2.63327 10.3246L3.5166 11.2079L9.99994 17.6912L16.4833 11.2079L17.3666 10.3246C17.7924 9.89894 18.1302 9.39358 18.3607 8.83736C18.5912 8.28115 18.7098 7.68497 18.7098 7.0829C18.7098 6.48083 18.5912 5.88465 18.3607 5.32844C18.1302 4.77222 17.7924 4.26686 17.3666 3.84123Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                </h5>
                <div className='text-[14px] font-medium mt-3'>$89.50</div>
                <span className='group-hover:hidden block'>1 color</span>
                <div className='group-hover:block hidden mt-1'>
                <div className='w-5 h-5 rounded-full border border-black flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3.5 h-3.5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                </div>
                </div>
                </div>
            </div> */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}



export function QuickAddButton() {
  return (
    <button className="w-full border border-green-600 py-1 ">
      <ul className="w-full border flex justify-around border-red-700">
        <li className="py-2 px-6 hover:bg-black hover:text-white">xl</li>
        <li className="py-2 px-6  hover:bg-black hover:text-white">xl</li>
        <li className="py-2 px-6  hover:bg-black hover:text-white">xl</li>
        <li className="py-2 px-6  hover:bg-black hover:text-white">xl</li>
        <li className="py-2 px-6  hover:bg-black hover:text-white">xl</li>
      </ul>
    </button>
  );
}
