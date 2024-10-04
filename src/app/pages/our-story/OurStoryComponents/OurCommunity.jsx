import React from 'react'

export default function OurCommunity() {
  return (
    <>
    <section className='lg:py-28 lg:px-28 py-16 px-5'>
        <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-between lg:gap-28 gap-12'>
            <div className='space-y-8'>
                <h2 className='lg:text-[60px] text-[32px] font-medium'>Our community</h2>
                <h4 className='text-[22px] font-medium'>Mighty oaks from little acorns grow</h4>
                <p className='text-sm font-semibold text-pretty'>It only takes a tiny spark to turn a meaningful idea into an impactful pursuit. Today, we are a group of 300 people from over 20 different countries. Sharing our optimism and embodying our values is our job, but it is also a reflection of our true selves. We stand together on what’s important. Here are a few throwbacks to some of our achievements:</p>
            </div>
            <div className='h-[540px] relative bg-[url("https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/actionsv21-1638308615012.jpg?v=1638308618")] bg-cover bg-center'>
            <div className='text-white absolute md:bottom-28 bottom-8 w-[50%] left-5'>
                <h5 className='md:text-[22px] text-[20px] font-semibold'>Make it Local</h5>
                <p className='text-sm font-semibold'>A limited edition series of organic cotton T-shirts designed in partnership with 3 local artists and made exclusively in Quebec to showcase the richness of local production and craftsmanship.</p>
            </div>
            </div>
        </div>
    </section>
    </>
 )
}