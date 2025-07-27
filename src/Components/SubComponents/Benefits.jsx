import React from 'react'

function Benefits({img,title,height}) {
  return (
    <>
        <section className='flex items-center gap-1 w-fit border border-[#7a520d93] py-1 px-2 rounded-md '>
            <img src={img} alt="" className='h-[16px] ' />
            <span className='text-[12px] text-[#7a520d] inter-400 '>{title}</span>
        </section>
    </>
  )
}

export default Benefits