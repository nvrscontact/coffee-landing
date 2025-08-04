import React from 'react'

function Novalty({img,title}) {
  return (
    <>
          <div className='mx-6 flex flex-col inter-200 mb-10'>
            <h1 className='fira-sans-extralight animated_white text-4xl inter-200 text-center '>{title}</h1>
            <span className='border h-[1px] mx-20 mt-3 mb-4 border-[#7a520d] '></span>
            <p className='text-center text-[12px] mx-4 text-[#7a520d] inter-300'>We want to give you the guarantee that our services are very pleasant for the people who have tried them.</p>
              <section className='flex flex-col my-2  '>
                  <img src={img} alt="" className='w-80' />
              </section>
    
            <section className='flex gap-2 justify-center border-t mx-3 pt-3 border-[#7a520d]'>
              <button className='text-[#7a520dd0] inter-400 border py-2 px-3'>Información</button>
              <button className='bg-[#7a520dd0] text-white py-2 px-4 '>Reservación</button>
            </section>
        </div>
    </>
  )
}

export default Novalty