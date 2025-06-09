import React from 'react'

import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'


function Reviews() {
  return (
    <div className='border border-white/30 p-2 w-52 overflow-hidden break-words rounded-xl text-[12px] flex flex-col'>
        <h1 className=''>Amelia Konstantinova </h1>
        <section className='flex gap-2 items-center'>
            <span className='text-white/40'>2025</span>
          <section className='flex'>
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star_Out} alt="" className='h-4' />
            <img src={Star_Out} alt="" className='h-4' />
          </section>
        </section>
        <span className=''>Good Restaurant with good environment and delicious food.</span>
    </div>
  )
}

export default Reviews 
