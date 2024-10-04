import Link from 'next/link';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

export default function OurAchivements() {
  return (
    <section className='bg-[#F6F2EB] w-full lg:px-0 px-5'>
        <div className='max-w-[1200px] grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-10 mx-auto lg:py-24 py-12'>
            <div className='space-y-6'>
                <h3 className='lg:block hidden text-[60px] font-medium leading-[62px]'>Our 2023<br />achievements</h3>
                <h3 className='lg:hidden block text-[32px] font-medium leading-[62px]'>Our 2023 achievements</h3>
                <p className='sm:text-[15px] text-[13px] font-semibold text-pretty'>By adopting circularity and innovation as our design philosophy, we strive to help shape a better, more mindful world where human progress is in harmony with the planet’s well-being. After years of work, reflection, and challenges, and in line with our pledge for transparency, we are proud to share our progress and the significant milestones we’ve reached so far.</p>
                <Link target='_blank' legacyBehavior href={"https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Frank_And_Oak_Progress_Report_2024_ENG.pdf?v=1708447745"}>
                <h4 className='sm:text-[28px] text-[20px] cursor-pointer font-medium flex gap-2 items-center group'>Read the full report <GoArrowRight className='group-hover:translate-x-2 duration-200' /></h4>
                </Link>
            </div>
            <div className='space-y-5'>
            <div>
                <div className='text-[44px] text-stroke font-bold'>100%</div>
                <h4 className='text-[22px] font-medium pb-3'>of our assortment is responsible.</h4>
                <p className='text-sm font-semibold'>For us, that means all our products either contain low-impact, cruelty-free, organic, biodegradable, or recycled fibres, or are manufactured using industry-leading technologies and processes.</p>
            </div>
            <div>
                <div className='text-[44px] text-stroke font-bold'>Less than 0.5%</div>
                <h4 className='text-[22px] font-medium pb-3'>of our products feature virgin polyester.</h4>
                <p className='text-sm font-semibold'>We have (almost) eliminated the use of virgin polyester and replaced it with recycled polyester.</p>
            </div>
            <div>
                <div className='text-[44px] text-stroke font-bold'>100%</div>
                <h4 className='text-[22px] font-medium pb-3'>of our denim collection is designed to be circular.</h4>
                <p className='text-sm font-semibold'>All our denim styles are designed to be easily recycled. This means we craft them using conscious materials, salvaged fibres, and zero rivets. </p>
            </div>
            <div>
                <div className='text-[44px] text-stroke font-bold'>Over 70%</div>
                <h4 className='text-[22px] font-medium pb-3'>of our styles are made using mono-fibres and bi-fibres.</h4>
                <p className='text-sm font-semibold'>The more fibres are mixed together in a garment, the harder it will be to recycle. That is why we strive to keep the percentage of multi-fibre pieces to less than 30% of our collection.</p>
            </div>
            <div>
                <div className='text-[44px] text-stroke font-bold'>More than 40%</div>
                <h4 className='text-[22px] font-medium pb-3'>of our deliveries were carbon-neutral in 2023.</h4>
                <p className='text-sm font-semibold'>Since October 2022, we have been working with our warehousing and last-mile logistics partner, GoBolt, to make our deliveries carbon neutral. Last year, they delivered more than 40% of our packages. 15% of these deliveries were done by Electric Vehicle (EV), and the rest was offset by sequestering carbon.</p>
            </div>
            <div>
                <div className='text-[44px] text-stroke font-bold'>Code of Conduct</div>
                <h4 className='text-[22px] font-medium pb-3'>We require all our manufacturing partners to sign our Code of Conduct.</h4>
                <p className='text-sm font-semibold'>As part of our commitment to transparency and accountability, we adhere to the highest standards of fair labour practices and environmental protection. That is why we require our partners to have completed, or be in the process of completing, compliance audits conducted by international organizations such as BSCI (Business Social Compliance Initiative) and WRAP (Worldwide Responsible Accredited Production).</p>
            </div>
            </div>
        </div>
    </section>
  )
}
