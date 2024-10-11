"use client"
import { BsArrowLeft } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import Link from "next/link";
export default function Cart({cartStatus,setCartStatus}) {
  return (
    <>
    <section className={`${cartStatus ? "opacity-100 visible" : "opacity-0 invisible"} duration-500`}>
    <div className="bg-[rgba(0,0,0,0.6)] fixed top-0 z-[9999999] w-full min-h-screen">
      <div className='lg:w-[38%] w-full  fixed top-0 right-0 z-[999999] bg-white'>
        <div onClick={()=>setCartStatus(!cartStatus)} className='py-3 px-6 flex items-center gap-2 bg-[#F9F9F9] cursor-pointer'>
          <BsArrowLeft className='font-bold' />
          <div className='text-sm font-semibold'>Contine Shopping</div>
        </div>
        <div className=' bg-black text-white text-[12px] text-center font-bold py-1.5'>Free shipping on orders $99+ and free returns</div>
        <div className='md:px-8 px-4 lg:h-screen h-full overflow-y-scroll'>
          <CartProducts/>
          <CartProducts/>
          <CartProducts/>
          <CartProducts/>
          <CartProducts/>
          <CartProducts/>
        </div>
        <div className="sticky bottom-0 px-8 bg-[#f9f9f9] py-4">
          <div className="flex items-center justify-between">
          <div className="text-[18px] font-semibold">Subtotal <span className="text-[14px] font-semibold text-customGray">(7 items)</span></div>
          <div className="text-[18px] font-semibold">$336.50</div>
          </div>
          <Link href="/checkouts">
          <button className="text-[20px] hover:shadow-[5px_5px_0px_0px_#DDD] font-semibold flex justify-center items-center gap-2 text-white bg-black p-3 w-full mt-5">Secure Checkout <IoLockClosedOutline size={20} /></button>
          </Link>
        </div>
        <div>
        </div>
      </div>
      </div>
      </section>
      </>
  )
}

function CartProducts() {
  return (
    <div className='grid grid-cols-[25%_auto] gap-3 py-5 border-b border-customBorder'>
            <img className='w-full' src="https://www.frankandoak.com/cdn/shop/files/2130296-6BB.01_1200x.jpg?v=1721141144" alt="" />
            <div className='flex flex-col justify-between'>
              <div>
                <div className='flex items-center justify-between'>
                <h5 className='text-sm font-semibold'>The Classic Tie in Black</h5>
                <MdClose size={20} />
                </div>
                <div className='font-semibold text-[12px] text-customGray'>Size: One Size</div>
                <div className='text-[12px] mt-1.5 text-customGray font-medium flex items-center gap-1 underline underline-offset-2'>Move to Wishlist <CiHeart size={16} /></div>
              </div>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <button className='px-2.5 py-0.5 text--[20px] border border-customBorder'>-</button>
                  <button className='px-2.5 py-0.5 border border-customBorder'>1</button>
                  <button className='px-2.5 py-0.5 text--[20px] border border-customBorder'>+</button>
                </div>
                <div className='text-[15px] font-semibold'>$39.50</div>
              </div>
            </div>
          </div>
  )
}
