import React from 'react'

import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'


function Reviews({names,dates,paragraph,stars}) {
  return (
    <>
    <div className='border border-white/30 p-2 w-52 overflow-hidden break-words rounded-xl text-[12px] flex flex-col'>
        
        <h1 className='text-[14px] '>{names} </h1>
        <section className='flex gap-2 items-center mb-1'>
          <section className='flex'>
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star_Out} alt="" className='h-4' />
            <img src={Star_Out} alt="" className='h-4' />
          </section>
        </section>
        <span className='mb-2'>{paragraph}</span>
      <span className=' text-white/40 text-xs'>{dates}</span>
    </div>
    </>
  )
}

export default Reviews 
