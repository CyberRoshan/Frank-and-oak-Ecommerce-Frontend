"use client"
import React, { useState } from 'react'
import { FaRegSquareFull } from 'react-icons/fa6';
import { SiWindows11 } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Card } from '../common/Card';

export default function Category() {
  let [settingGrid,setSettingGrid]=useState(false)
  return (
    <>
    <section className='grid lg:grid-cols-[17%_83%] md:grid-cols-[25%_75%] justify-between mt-[50px] md:px-5 px-0 pt-14'>
        <CategorySidebar/>
        <div className='sticky top-0 p-4 h-screen overflow-y-scroll catListScroll'>
            <div className='w-full border-b border-gray-300 py-6 flex items-center md:justify-end justify-between'>
                <div className='text-[14px] font-semibold flex gap-2 md:hidden '><svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg> Filters</div>
                <div className='flex gap-2 justify-end'>
            <SiWindows11 onClick={()=>setSettingGrid(false)} className='text-white cursor-pointer bg-black border-2 hover:border-[#BFBFBF] hover:bg-[#BFBFBF] border-black w-6 h-6' />
            <FaRegSquareFull onClick={()=>setSettingGrid(true)} className='w-6 h-6 cursor-pointer text-gray-500 hover:text-[#BFBFBF]' />
            <div className='flex items-center text-[14px] font-semibold gap-2 ms-5'>Sort by <MdOutlineKeyboardArrowDown /></div>
                </div>
            </div>
            <div className='py-6'>
            <div className='text-[20px] pb-5 font-medium'>New In</div>
            <div className={`grid ${settingGrid ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5" } duration-300`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='text-center mt-10'>
                <span className='text-[14px] font-mediumtext-[#666] block'>40 of 99</span>
                <button className='border-2 py-2.5 px-16 hover:shadow-[5px_5px_0px_0px_#666] border-black font-medium mt-2'>Load more</button>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}


export function CategorySidebar() {
    let [faqStatus,setFaqStatus]=useState(false)
  return (
    <aside className="h-screen md:block hidden">
      <div className="text-[13px] font-medium">
        {" "}
        <span className="underline underline-offset-2">Home</span> /{" "}
        <span className="underline underline-offset-2">Women</span>
      </div>
      <div className="text-[20px] pt-2 font-medium">New In</div>
      <div
        id="asideScrollBar"
        className="h-[90vh] pe-2 overflow-scroll overflow-x-hidden"
      >
        <div className="py-7 divide-y divide-gray-300">
          <div className="border-t border-gray-300  ">
            <h4
              onClick={() => setFaqStatus(!faqStatus)}
              className="text-[14px] font-semibold py-4 px-2 flex items-center justify-between"
            >
              Fit & Sizing{" "}
              <span>
                {faqStatus ? (
                  <svg
                    className="w-2.5 h-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                )}
              </span>
            </h4>
            {
                faqStatus ?  <div className='space-y-2 pb-3 ps-2'>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
  </div>

  :''
            }
          </div>
          <div className=" ">
            <h4 className="  text-[14px] font-semibold py-4 px-2 flex items-center justify-between">
              Fit & Sizing{" "}
              <span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> */}
              </span>
            </h4>
          </div>
          <div className=" ">
            <h4 className="  text-[14px] font-semibold py-4 px-2 flex items-center justify-between">
              Fit & Sizing{" "}
              <span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> */}
              </span>
            </h4>
          </div>
          <div className=" ">
            <h4 className="  text-[14px] font-semibold py-4 px-2 flex items-center justify-between">
              Fit & Sizing{" "}
              <span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> */}
              </span>
            </h4>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6">
          <h3 className="text-[14px] font-bold">Featured</h3>
          <ul className="py-4 text-[13px] font-semibold space-y-2">
            <li>New In</li>
            <li>Best Sellers</li>
            <li>Coming Soon</li>
            <li>The Originals</li>
            <li>Workwear</li>
            <li>Sale</li>
          </ul>
          <h3 className="text-[14px] font-bold mt-5">Clothing</h3>
          <ul className="py-4 text-[13px] font-semibold space-y-2">
            <li>Shop All</li>
            <li>T-shirts & Tops</li>
            <li>Blouses & Shirts</li>
            <li>Sweaters & Cardigans</li>
            <li>Blazers & Overshirts</li>
            <li>Sale</li>
            <li>Denim</li>
            <li>Pants</li>
            <li>Dresses</li>
          </ul>
          <h3 className="text-[14px] font-bold mt-5">Accessories</h3>
          <ul className="pt-4 text-[13px] font-semibold space-y-2">
            <li>Shop All</li>
            <li>T-shirts & Tops</li>
            <li>Blouses & Shirts</li>
            <li>Sweaters & Cardigans</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}



