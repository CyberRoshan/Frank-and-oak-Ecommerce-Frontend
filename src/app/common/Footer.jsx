import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='w-full py-[50px] bg-black text-white px-5'>
      <div className='max-w-[1400px] mx-auto w-full'>
        <div>
        <div className='w-full bg-black text-white py-4'>
        <ul className='grid md:grid-cols-4 grid-cols-2 items-center md:gap-0 gap-5 justify-around'>
            <li className='flex flex-col text-center sm:gap-3 gap-2'>
                <img className='lg:w-10 w-8 mx-auto' src="/images/truck.png" alt="" />
                <div className='md:text-[20px] text-[15px] font-medium'>Free Shipping</div>
                <span className='md:text-sm text-[10px] font-medium'>On orders over $99.</span>
            </li>
            <li className='flex flex-col text-center sm:gap-3 gap-2'>
                <img className='lg:w-10 w-8 mx-auto' src="/images/return.png" alt="" />
                <div className='md:text-[20px] text-[15px] font-medium'>Free Returns</div>
                <span className='md:text-sm text-[10px] font-medium'>Only keep what you love.</span>
            </li>
            <li className='flex flex-col text-center sm:gap-3 gap-2'>
                <img className='lg:w-10 w-8 mx-auto' src="/images/earnpoints.webp" alt="" />
                <div className='md:text-[20px] text-[15px] font-medium'>Frank&apos;s Club</div>
                <span className='md:text-sm text-[10px] font-medium'>Earn points and get rewards.</span>
            </li>
            <li className='flex flex-col text-center sm:gap-3 gap-2'>
                <img className='lg:w-10 w-8 mx-auto' src="/images/Sezzle.webp" alt="" />
                <div className='md:text-[20px] text-[15px] font-medium'>Buy Now, Pay Later</div>
                <span className='md:text-sm text-[10px] font-medium'>Select Klarna at checkout.</span>
            </li>
        </ul>
    </div>
        </div>
        <div className='grid lg:grid-cols-[15%_55%_25%] grid-cols-1 justify-between py-24'>
          <div className='lg:order-1 order-2'>
            <img className='lg:w-[50%] w-[30%] lg:mx-0 mx-auto lg:py-0 py-4 ' src="https://image.pitchbook.com/TF1G8VX2INpsvUYFzsmNbKdIZSf1693233775973_200x200" alt="" />
            <h4 className='lg:hidden block text-center text-[18px] font-medium pt-5'>Stay Connected</h4>
            <ul className='flex gap-3 py-5 lg:justify-start justify-center'>
              <li className='cursor-pointer'><CiInstagram size={22} /></li>
              <li className='cursor-pointer'><SlSocialFacebook size={20} /></li>
              <li className='cursor-pointer'><FaXTwitter size={20} /></li>
              <li className='cursor-pointer'><FaPinterestP size={20} /></li>
              <li className='cursor-pointer'><CiMail size={22} /></li>
              <li className='cursor-pointer'><FaLinkedinIn size={20} /></li>
            </ul>
          </div>
            <div className='lg:grid hidden grid-cols-3 lg:order-2 order-3'>
              <ul className='space-y-2.5 mx-auto'>
                <li><h4 className='text-[20px] font-medium'>Our Story</h4></li>
                <li className='text-[13px] font-medium cursor-pointer'>Who we are</li>
                <li className='text-[13px] font-medium cursor-pointer'>Sustainable practices</li>
                <li className='text-[13px] font-medium cursor-pointer'>Design Ideology</li>
                <li className='text-[13px] font-medium cursor-pointer'>Fabrics</li>
                <li className='text-[13px] font-medium cursor-pointer'>Circular denim™</li>
                <li className='text-[13px] font-medium cursor-pointer'>Partners and factories</li>
              </ul>
              <ul className='space-y-2.5 mx-auto'>
                <li><h4 className='text-[20px] font-medium'>Discover</h4></li>
                <li className='text-[13px] font-medium cursor-pointer'>Gift Cards</li>
                <li className='text-[13px] font-medium cursor-pointer'>Frank&apos;s Club</li>
                <li className='text-[13px] font-medium cursor-pointer'>Give $15, Get $15</li>
                <li className='text-[13px] font-medium cursor-pointer'>Affiliate</li>
                <li className='text-[13px] font-medium cursor-pointer'>Blog</li>
                <li className='text-[13px] font-medium cursor-pointer'>Work with us</li>
                <li className='text-[13px] font-medium cursor-pointer'>Our Stores</li>
              </ul>
              <ul className='space-y-2.5 mx-auto'>
                <li><h4 className='text-[20px] font-medium'>Customer Care</h4></li>
                <li className='text-[13px] font-medium cursor-pointer'>Shipping Information</li>
                <li className='text-[13px] font-medium cursor-pointer'>Returns & Exchanges</li>
                <li className='text-[13px] font-medium cursor-pointer'>Coupon Codes</li>
                <li className='text-[13px] font-medium cursor-pointer'>F.A.Q.</li>
                <li className='text-[13px] font-medium cursor-pointer'>Terms & Conditions</li>
                <li className='text-[13px] font-medium cursor-pointer'>Refund Policy</li>
                <li className='text-[13px] font-medium cursor-pointer'>Privacy policy</li>
                <li className='text-[13px] font-medium cursor-pointer'>Accessibility Statement</li>
                <li className='text-[13px] font-medium cursor-pointer'>Customer Data Requests</li>
              </ul>
            </div>
            <div className='lg:order-3 order-1 lg:pt-0 pt-5 lg:border-t-0 border-t border-white'>
            <h4 className='text-[20px] font-medium pb-3'>Stay in touch</h4>
            <p className='sm:text-[12px] text-[10px] font-medium'>Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more.</p>
            <form className='space-y-4 py-4'>
              <input className='text-sm w-full py-3 focus:ring-white focus:ring-2 text-white font-medium bg-[#1F2322] border border-white' type="email" required placeholder='Email' />
              <input className='text-sm w-full py-3 focus:ring-white focus:ring-2 text-white font-medium bg-[#1F2322] border border-white' type="text" required placeholder='First Name' />
              <div className='flex items-center gap-3'>
                  <label className='text-[13px] font-medium' htmlFor="radioBtns">I shop for:</label>
                  <div className='flex gap-4 py-2'>
                    <div>
                    <input type="radio" id='MenBtn' name='radioBtn' className='form-radio bg-black border-white checked:bg-black text-black focus:ring-black me-2' />
                    <label className='text-[13px] font-medium' htmlFor="MenBtn">Men</label>
                    </div>
                    <div>
                    <input type="radio" id='WomenBtn' name='radioBtn' className='form-radio bg-black border-white checked:bg-black text-black focus:ring-black me-2' />
                    <label className='text-[13px] font-medium' htmlFor="WomenBtn">Women</label>
                    </div>
                    <div>
                    <input type="radio" id='AllBtn' name='radioBtn' className='form-radio bg-black border-white checked:bg-black text-black focus:ring-black me-2' />
                    <label className='text-[13px] font-medium' htmlFor="AllBtn">All</label>
                    </div>
                  </div>
                </div>
              <button type='submit' className='bg-black border border-white py-3 w-full text-sm font-medium hover:shadow-Btn-shadow-white'>Subscribe</button>
            </form>
            </div>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-between'>
          <h6 className='text-[12px] font-medium'>© Frank And Oak 2024 , All Rights Reserved.</h6>
          <h6 className='text-[12px] font-medium'>Created with 💖 by Roshan Chaurasia</h6>
        </div>
        </div>
    </footer>
  )
}
