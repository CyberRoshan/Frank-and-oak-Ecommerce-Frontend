"use client"
import YouMightAlsoLiked from "@/app/common/YouMightAlsoLiked";
import ProductReview from "@/app/HomeComponents/ProductReview";
import React, { useState } from "react";
import ProductReviews from "../ProductComponents/ProductReviews";

export default function ProductDetails() {
  let [faq,setFaq]=useState(false)
  return (
    <>
    <section className="pt-12 w-full grid lg:grid-cols-[60%_38%] md:grid-cols-[40%_60%] grid-cols-1 justify-between mt-[50px] p-2 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <img src="https://www.frankandoak.com/cdn/shop/files/2110369-002.01_1200x.jpg?v=1725030315" alt="" />
        <img src="https://www.frankandoak.com/cdn/shop/files/2110369-002.02_1200x.jpg?v=1725030315" alt="" />
        <img src="https://www.frankandoak.com/cdn/shop/files/2110369-002.03_1200x.jpg?v=1725030315" alt="" />
        <img src="https://www.frankandoak.com/cdn/shop/files/2110369-002.04_1200x.jpg?v=1725030315" alt="" />
      </div>
      <div className="p-10">
        <div className="text-[13px] font-medium">
          {" "}
          <span className="underline underline-offset-2">Home</span> /{" "}
          <span className="underline underline-offset-2">Women</span> /{" "}
          <span className="underline underline-offset-2">New In</span>
        </div>
        <div className="py-5">
          <span className="bg-black text-white text-[10px] font-medium uppercase p-1">
            new
          </span>
          <h3 className="text-[24px] font-semibold mt-3 mb-5">
            The Printed Sheer Shirt in Black
          </h3>
          <div className="text-[16px] font-semibold mb-2">$99.50</div>
          <p className="text-[13px] font-medium">
            4 interest-free payments of $24.87 with <b>Klarna</b>.{" "}
            <u>Learn More</u>{" "}
          </p>
        </div>
        <div className="py-8 border-y border-gray-300">
            <p className="text-[14px] font-semibold mb-4">Select a size</p>
            <div className="space-x-2">
                <button className="text-[14px] font-semibold py-2 px-2.5 border border-gray-300 hover:border-gray-600 uppercase">xxs</button>
                <button className="text-[14px] font-semibold py-2 px-2.5 border border-gray-300 hover:border-gray-600 uppercase">xxs</button>
                <button className="text-[14px] font-semibold py-2 px-2.5 border border-gray-300 hover:border-gray-600 uppercase">xxs</button>
                <button className="text-[14px] font-semibold py-2 px-2.5 border border-gray-300 hover:border-gray-600 uppercase">xxs</button>
                <button className="text-[14px] font-semibold py-2 px-2.5 border border-gray-300 hover:border-gray-600 uppercase">xxs</button>
                <button className="text-[14px] font-semibold py-2 px-2.5 border border-gray-300 hover:border-gray-600 uppercase">xxs</button>
            </div>
        </div>
        <div className="py-6 border-b border-gray-300">
            <div className="grid grid-cols-[78%_13%] gap-3 relative ">
                <div className="hover:bg-[rgba(231,229,227,0.3)] w-[93%] h-full absolute top-0 left-0"></div>
            <button className="bg-black text-[16px] font-semibold text-white py-5 px-10 w-full">Add to cart</button>
            <button className="py-5 border-2 border-black ">
            <svg className="mx-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3666 3.84123C16.941 3.4154 16.4356 3.07761 15.8794 2.84714C15.3232 2.61667 14.727 2.49805 14.1249 2.49805C13.5229 2.49805 12.9267 2.61667 12.3705 2.84714C11.8143 3.07761 11.3089 3.4154 10.8833 3.84123L9.99994 4.72457L9.1166 3.84123C8.25686 2.98149 7.0908 2.49849 5.87494 2.49849C4.65907 2.49849 3.49301 2.98149 2.63327 3.84123C1.77353 4.70098 1.29053 5.86704 1.29053 7.0829C1.29053 8.29876 1.77353 9.46482 2.63327 10.3246L3.5166 11.2079L9.99994 17.6912L16.4833 11.2079L17.3666 10.3246C17.7924 9.89894 18.1302 9.39358 18.3607 8.83736C18.5912 8.28115 18.7098 7.68497 18.7098 7.0829C18.7098 6.48083 18.5912 5.88465 18.3607 5.32844C18.1302 4.77222 17.7924 4.26686 17.3666 3.84123Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </button>
            </div>
        </div>
        <div className="flex gap-5 py-6 border-b border-gray-300">
            <div className="flex items-center gap-2">
                <img src="images/blackTruck.svg" alt="" />
                <p className="text-[13px] font-medium">Free Shipping over $99</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="images/blackReturn.svg" alt="" />
                <p className="text-[13px] font-medium">Free Returns</p>
            </div>
        </div>
        <div className="py-6 border-b border-gray-30">
            <h5 className="text-[18px] font-semibold mb-5">Overview</h5>
            <p className="text-[14px] font-medium mb-4">A statement piece. This long-sleeved loose shirt is made from a sheer fabric in a blend of TENCEL™ Lyocell and recycled nylon. Relaxed fit. Features an all-over tonal animal print. Point collar.</p>
            <p className="text-[14px] font-medium ">TENCEL™ Lyocell, a material made from regenerated cellulosic fibres sourced from sustainably managed forests. It offers superior softness, durability, and breathability.</p>
        </div>
        <div>
          <div className="border-b border-gray-30">
            <h4 onClick={()=>setFaq(!faq)} className=" py-6 text-[16px] font-medium flex items-center justify-between">Features <span>{faq ? <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg> : <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>}</span></h4>{faq ? <p className="font-semibold text-[14px]">
              Sustainable Materials
              <ul className="py-3 space-y-2">
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
              </ul>
            </p> 
            :
            ""
            }
          </div>
          <div className="border-b border-gray-30">
            <h4 onClick={()=>setFaq(!faq)} className=" py-6 text-[16px] font-medium flex items-center justify-between">Fit & Sizing <span>{faq ? <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg> : <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>}</span></h4>{faq ? <p className="font-semibold text-[14px]">
              Sustainable Materials
              <ul className="py-3 space-y-2">
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
              </ul>
            </p> 
            :
            ""
            }
          </div>
          <div className="border-b border-gray-30">
            <h4 onClick={()=>setFaq(!faq)} className=" py-6 text-[16px] font-medium flex items-center justify-between">Material & Care <span>{faq ? <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg> : <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>}</span></h4>{faq ? <p className="font-semibold text-[14px]">
              Sustainable Materials
              <ul className="py-3 space-y-2">
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
              </ul>
            </p> 
            :
            ""
            }
          </div>
          <div className="border-b border-gray-30">
            <h4 onClick={()=>setFaq(!faq)} className=" py-6 text-[16px] font-medium flex items-center justify-between">Shipping & Returns <span>{faq ? <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg> : <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>}</span></h4>{faq ? <p className="font-semibold text-[14px]">
              Sustainable Materials
              <ul className="py-3 space-y-2">
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
              </ul>
            </p> 
            :
            ""
            }
          </div>
          <div className="border-b border-gray-30">
            <h4 onClick={()=>setFaq(!faq)} className=" py-6 text-[16px] font-medium flex items-center justify-between">Features <span>{faq ? <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg> : <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>}</span></h4>{faq ? <p className="font-semibold text-[14px]">
              Sustainable Materials
              <ul className="py-3 space-y-2">
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="images/tencel.svg" className="w-8 h-8" alt="Tencel" />
                  <p className="text-[14px] font-medium underline underline-offset-2">TENCEL™ Lyocell</p>
                </li>
              </ul>
            </p> 
            :
            ""
            }
          </div>
        </div>
      </div>
    </section>
    <YouMightAlsoLiked heading={"You might also like"}/>
    <YouMightAlsoLiked heading={"Recently Viewed"}/>
    <ProductReviews/>
    </>
  );
}
