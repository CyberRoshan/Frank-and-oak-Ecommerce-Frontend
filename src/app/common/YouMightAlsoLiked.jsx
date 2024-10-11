import React from 'react'
import { Card } from './Card'

export default function YouMightAlsoLiked({heading}) {
  return (
    <section className='max-w-[1460px] mx-auto py-[50px] lg:px-0 px-5'>
        <h3 className='md:text-[32px] text-[22px] font-medium'>{heading}</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 py-[50px] md:gap-5 gap-3'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}
