import React from 'react'
import parkingWhite from '../../assets/parkingWhite.svg'
import dot_green from '../../assets/dot_green.svg'
import wheelchair from '../../assets/wheelchair.svg'

function Novalty({img,title}) {
  return (
    <>
          <div className='mx-6 flex flex-col inter-200 mb-10'>
            <h1 className='fira-sans-extralight animated_white text-4xl inter-200 text-center '>{title}</h1>
            <span className='border h-[1px] mx-20 mt-3 mb-4 border-[#7a520d] '></span>
            <p className='text-center text-[12px] mx-4 text-[#7a520d] inter-300 mb-2'>We want to give you the guarantee that our services are very pleasant for the people who have tried them for the rest of them lives i promise.</p>
             <section className='flex flex-col items-center justify-center'>
                  <div className='flex gap-3 mb-3 ml-3'>
                      <section className='flex items-center relative'>
                        <img src={dot_green} alt="" className='h-8 absolute -left-6'/>
                        <span className='text-[10px] text-black/70 inter-400'>24h Room Service</span>
                      </section>
                      <section className='flex items-center relative gap-1'>
                        <img src={wheelchair} alt="" className='h-4 '/>
                        <span className='text-[10px] text-black/70 inter-400'>Wheelchair accessible</span>
                      </section>
                  </div>
                <div className='flex gap-1'>
                  <span className=' flex gap-1 text-[9px] py-1 px-2  bg-black/30 text-[#ffffff] inter-300 '>
                    <img src={parkingWhite} alt="" className='h-[14px] '/>
                    <h1>Wifi Free</h1>
                  </span>
                  <span className=' flex gap-1 text-[9px] py-1 px-2 bg-black/30 text-[#ffffff] inter-300 '>
                    <img src={parkingWhite} alt="" className='h-[14px] '/>
                    <h1>Parking Private</h1>
                  </span>
                  <span className=' flex gap-1 text-[9px] py-1 px-2  bg-black/30 text-[#ffffff] inter-300 '>
                    <img src={parkingWhite} alt="" className='h-[14px] '/>
                    <h1>Elevator</h1>
                  </span>
                </div>
            
              </section> 
              
              <section className='flex flex-col mt-2  '>
                  <img src={img} alt="" className='w-80' />
              </section>
    
            <section className='flex gap-2 justify-center border-t-[5px] mx-3 pt-5 border-[#7a520d]'>
              <button className='text-[#7a520dd0] inter-400 border py-2 px-3'>Información</button>
              <button className='bg-[#7a520dd0] text-white py-2 px-4 '>Reservación</button>
            </section>
        </div>
    </>
  )
}

export default Novalty

/* 
          <span className='flex flex-col border border-[#7a520dd0] bg-black/30 '>
                  <span className='text-white mb-1 text-[12px] text-center  px-2 py-2'>Parking</span>
                  <span className='text-[11px] bg-[#7a520dd0] py-2 w-full flex justify-center items-center'><img src={parkingWhite} alt="" className='h-6' /></span>
                </span>
*/