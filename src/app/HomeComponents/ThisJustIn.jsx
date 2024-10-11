"use client"
import React, { useState } from 'react'
import { Card } from '../common/Card';

export default function ThisJustIn() {
  return (
    <section className='max-w-[1460px] mx-auto py-[50px]'>
        <h3 className='md:text-[32px] text-[22px] font-medium'>This Just In</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 py-[50px] md:gap-5 gap-3'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}
