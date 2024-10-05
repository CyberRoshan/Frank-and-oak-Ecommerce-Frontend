"use client"
import React from 'react'
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { IoMdAdd } from "react-icons/io";

export default function MobileSideBar({sidebarStatus}) {
  return (
    <section className={` ${sidebarStatus ? "translate-x-0" : "-translate-x-full"} duration-300 transform absolute top-0 left-0 bg-[#F9F9F9] w-[90%] h-screen`}>
        <div className='flex items-center justify-between p-3'>
        <CiSearch size={28} />
        <MdClose size={28} />
        </div>
        <div className='flex flex-grow'>
          <button className='bg-white grow text-sm font-medium p-3 px-2'>This Just In</button>
          <button className='bg-[#EBECEE] grow text-sm font-medium p-3  px-2'>Women</button>
          <button className='bg-[#EBECEE] grow text-sm font-medium p-3  px-2'>Men</button>
          <button className='bg-[#EBECEE] grow text-sm font-medium p-3  px-2'>Our Story</button>
        </div>
        <div className=' w-full h-full px-5'>
          <div>
        <Disclosure>
      <DisclosureButton className="py-3 text-[18px] font-semibold flex items-center justify-between border border-red-600 w-full">Women&apos;s New Arrivals
      <IoMdAdd size={20} fontWeight={400} />
      </DisclosureButton>
      <DisclosurePanel className=" duration-500 ">
      <ul className="space-y-2">
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
            Blazers
            </li>
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
            Dresses
            </li>
            <li className="text-[15px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
          </ul>
      </DisclosurePanel>
    </Disclosure>
     </div>
     
        </div>
    </section>
  )
}

