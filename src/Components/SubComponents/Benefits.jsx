import React from 'react'

function Benefits({img,title,height}) {
  return (
    <>
        <section className='flex items-center gap-2 w-fit border border-white/20 py-1 px-2 rounded-md '>
            <img src={img} alt="" className='h-[16px] ' />
            <span className='text-[12px] '>{title}</span>
        </section>
    </>
  )
}

export default Benefits