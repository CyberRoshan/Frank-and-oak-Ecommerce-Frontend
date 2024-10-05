import React from 'react'

export default function HowItAllStarted() {
  return (
    <>
    <section className='lg:p-28 p-5'>
        <article className='lg:text-[20px] sm:text-[16px] text-sm px-5 font-medium text-center max-w-[850px] leading-7 mx-auto'>We believe in considering the impact of the choices we make every day and view those choices as an opportunity to better ourselves. Our purpose is to Inspire a Better way of Living by creating conscious products that last through time. By marrying innovation with eco-friendly processes, we strive to help shape a cleaner, healthier, and more mindful world where human progress is in harmony with the planet&apos;s well-being.</article>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-between gap-10 lg:py-28 py-5'>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/howv21-1638308615089.jpg?v=1638308631" alt="" />
            </div>
            <div>
                <h2 className='lg:text-[60px] text-[32px] font-medium'>How it all started</h2>
                <div className='space-y-4'>
                <p className='sm:text-[16px] text-sm font-semibold'>Frank And Oak was founded in Montreal in 2012, with a mission to create an apparel brand that would speak to a new generation of creatives and entrepreneurs.</p>
                <p className='sm:text-[16px] text-sm font-semibold'>What once started as a favourite in Montreal&apos;s Mile End quickly blossomed into one of Canada&apos;s leading lifestyle brands and digital retailers.</p>
                <p className='sm:text-[16px] text-sm font-semibold'>A certified B Corp, Frank And Oak is now a leader in sustainable fashion and using innovative fabrics from nature to make products that are thoughtfully designed to help you live better, enjoy more, and feel good in everything you wear.</p>
                <h4 className='sm:text-[22px] text-[20px] font-medium'>The Frank And Oak team</h4>
                </div>
            </div>
        </div>
    <OurValues/>
    </section>
    </>
 )
}

function OurValues() {
  return (
    <div>
        <h3 className='md:text-[60px] text-[32px] font-medium pb-10'>Our values</h3>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
            <div>
                <h4 className='text-[22px] font-medium pb-3'>Act with purpose</h4>
                <p className='text-[13px] font-semibold'>We design durable products that blend timeless style with functional features that help lay the foundation for better living.</p>
            </div>
            <div>
                <h4 className='text-[22px] font-medium pb-3'>Create communities</h4>
                <p className='text-[13px] font-semibold'>We bring together a community of passionate and diverse individuals who want to be part of something bigger.</p>
            </div>
            <div>
                <h4 className='text-[22px] font-medium pb-3'>Inspire innovation</h4>
                <p className='text-[13px] font-semibold'>We are a forward-thinking brand that delivers cutting-edge products to fit our customers modern and evolving lifestyles.</p>
            </div>
            <div>
                <h4 className='text-[22px] font-medium pb-3'>Be authentic</h4>
                <p className='text-[13px] font-semibold'>We are driven by passion, not ego. We recognize and celebrate our individuality, strengths, and even weaknesses, but remain humble and open to continuous improvement.</p>
            </div>
        </div>
    </div>
  )
}

