import React from 'react'

function Benefits({img,title,height}) {
  return (
    <>
        <section className='flex flex-col gap-1 w-full text-center items-center'>
          <div className='bg-[#79570ff1] w-fit p-2 rounded-md border border-black/40'>
            <img src={img} alt="" className='h-7' />
          </div>
            <span className='text-[9px] text-[#7a5300] inter-500 '>{title}</span>
        </section>
    </>
  )
}

export default Benefits