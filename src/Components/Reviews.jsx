import React from 'react'

import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'


function Reviews({names,dates,paragraph,stars}) {
  return (
    <>
    <div className='border border-white/30 p-2 w-fit max-w-60 overflow-hidden break-words rounded-xl text-pretty flex flex-col'>
        
        <section className='flex gap-2 items-center'>
          <h1 className='text-[12px] '>{names} </h1>
            
            <section className='flex'>
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star} alt="" className='h-4' />
            <img src={Star_Out} alt="" className='h-4' />
            <img src={Star_Out} alt="" className='h-4' />
            </section>
        
        </section>
      <span className=' text-white/40 text-[10px] mb-1 '>{dates}</span>
      <span className='text-[9px] '>{paragraph}</span>
    </div>
    </>
  )
}

export default Reviews 
