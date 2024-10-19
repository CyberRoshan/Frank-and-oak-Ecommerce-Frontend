"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsBagPlus } from "react-icons/bs";
import Login from '../auth/Login';
import MobileSideBar from '../modals/MobileSideBar';
import Link from 'next/link';
import { MenMegaMenu, OurStoryMegaMenu, ThisJustInMegaMenu, WomenMegaMenu } from './MegaMenu';
import TextSlider from './TextSlider';
import Cart from '../modals/Cart';
export default function Header() {
  let [loginStatus,setLoginStatus]=useState(false)
  let [cartStatus,setCartStatus]=useState(false)
  let [menuHover,setMenuHover]=useState(0)
  let [sidebarStatus,setSidebarStatus]=useState(false)
  
  return (
    <div className='fixed top-0 z-[999999999] w-full'>
    <TextSlider/>
    <header className='shadow-md py-2 lg:py-1 px-2 sm:px-4 md:px-10 bg-white flex justify-between'>
      <div className='  flex gap-2 sm:gap-4 items-center  basis-[70%] md:basis-[20%] lg:basis-[15%]'>
      <RxHamburgerMenu onClick={()=>setSidebarStatus(true)} className='sm:hidden block w-[22px] h-7' />
      <MobileSideBar sidebarStatus={sidebarStatus}/>
      <Link href={"/"}>
      <span className='font-bold md:text-[18px] text-[15px] cursor-pointer'>Frank And Oak</span>
      </Link>
      </div>
      <nav className=' basis-[30%] lg:basis-[84%] md:basis-[75%]  flex items-center justify-end lg:justify-between'>
        <div className='lg:block  hidden'>
          <ul className='flex gap-6 text-[15px] font-medium'>
            <li onMouseOver={()=>setMenuHover(1)} onMouseOut={()=>setMenuHover(0)} className='hover:bg-[#F9F9F9] cursor-pointer hover:underline underline-offset-4 px-3 duration-500 p-2'>This Just In
            <ThisJustInMegaMenu menuHover={menuHover} setMenuHover={setMenuHover} />
            </li>
            <li onMouseOver={()=>setMenuHover(2)} onMouseOut={()=>setMenuHover(0)} className='hover:bg-[#F9F9F9] cursor-pointer hover:underline underline-offset-4 px-3 duration-500 p-2'>Women
            <WomenMegaMenu menuHover={menuHover} setMenuHover={setMenuHover} />
            </li>
            <li onMouseOver={()=>setMenuHover(3)} onMouseOut={()=>setMenuHover(0)} className='hover:bg-[#F9F9F9] cursor-pointer hover:underline underline-offset-4 px-3 duration-500 p-2'>Men
            <MenMegaMenu menuHover={menuHover} setMenuHover={setMenuHover} />
            </li>
            <li onMouseOver={()=>setMenuHover(4)} onMouseOut={()=>setMenuHover(0)} className='hover:bg-[#F9F9F9] cursor-pointer hover:underline underline-offset-4 px-3 duration-500 p-2'>Our Story
            <OurStoryMegaMenu menuHover={menuHover} setMenuHover={setMenuHover} />
            </li>
          </ul>
        </div>
        <ul className='flex gap-3 sm:gap-5'>
          <li>
            <Link href={"/pages/search"}>
          <CiSearch className='sm:w-7 sm:h-7 h-5 w-5'  />
          </Link>
          </li>
          <li className='cursor-pointer' onClick={()=>setLoginStatus(true)}>
          <FaRegUserCircle className='sm:w-[22px]  sm:h-7 h-5 w-[18px] ' />
            <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
          </li>
          <li>
            <Link href={"/user-dashboard/wishlist"}>
          <FaRegHeart className='sm:w-[22px] sm:h-7 h-5 w-[18px] cursor-pointer' />
            </Link>
          </li>
          <li className='cursor-pointer' onClick={()=>setCartStatus(true)}>
          <BsBagPlus className='sm:w-[22px] sm:h-7 h-5 w-[18px]' />
          <Cart cartStatus={cartStatus} setCartStatus={setCartStatus} />
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}


