import React from 'react'

import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'


function Reviews({names,dates,paragraph,stars}) {
  return (
    <>
    <div className='border border-white/30 p-1 w-fit max-w-80 overflow-hidden break-words rounded-xl text-pretty flex flex-col fira-sans-extralight'>
        
        <section className='flex flex-col p-[6px] '>

          <section className='flex gap-2 items-center'>
            <h1 className='text-[12px] '>{names} </h1>
              
              <section className='flex [&>*]:h-4'>
              <img src={Star} alt="" className='' />
              <img src={Star} alt="" className='' />
              <img src={Star} alt="" className='' />
              <img src={Star_Out} alt="" className='' />
              <img src={Star_Out} alt="" className='' />
              </section>
          
          </section>
          <span className=' text-white/40 text-[10px] '>{dates}</span>
       </section>

      <span className='text-[11px] bg-white/10 p-2 rounded-[8px] '>{paragraph}</span>
    </div>
    </>
  )
}

export default Reviews 
