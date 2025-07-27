import React from 'react'

function Benefits({img,title,description}) {
  return (
    <>
        <article className='flex flex-col text-center'>
        <section className='flex flex-col text-center items-center mb-1'>
          <div className='bg-[#79570ff1] w-fit py-2 px-3 border border-black/50'>
            <img src={img} alt="" className='h-6' />
          </div>
            <span className='bg-black/80 text-white py-1 text-[9px] inter-200 w-full'>{title}</span>
        </section>
        <span className='text-[10px] text-black/70 inter-300 '>{description} </span>
        </article>
    </>
  )
}

export default Benefits