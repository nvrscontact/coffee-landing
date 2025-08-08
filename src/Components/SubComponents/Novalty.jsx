import React from 'react'
import parkingWhite from '../../assets/parkingWhite.svg'
import dot_green from '../../assets/dot_green.svg'
import wheelchair from '../../assets/wheelchair.svg'
import elevator from '../../assets/elevator.svg'
import dot from '../../assets/dot.svg'

function Novalty({img,title}) {
  return (
    <>
    {/* 7a520dd0 */}
        <article className='flex justify-center'>

          <div className='flex flex-col inter-200 mb-10 w-80 justify-center'>
            <h1 className='text-4xl inter-200 text-center text-[#7a520dd0] '>{title}</h1>
        <span className='border h-[1px] mx-5 my-3 border-[#7a520d] '></span>
                <div className='flex gap-1 justify-center'>
                  <span className=' flex gap-1 text-[9px] py-[6px] px-3  bg-[#7a520dd0] text-[#ffffff] inter-300 rounded-md items-center justify-center '>
                    <img src={parkingWhite} alt="" className='h-[14px] '/>
                    <h1>Wifi Free</h1>
                  </span>
                  <span className=' flex  gap-1 text-[9px] py-[6px] px-3 bg-[#7a520dd0] text-[#ffffff] inter-300 rounded-md '>
                    <img src={parkingWhite} alt="" className='h-[14px] '/>
                    <h1>Parking Private</h1>
                  </span>
                  <span className='flex gap-1 text-[9px] py-[6px] px-3 bg-[#7a520dd0] text-[#ffffff] inter-300 rounded-md'>
                    <img src={parkingWhite} alt="" className='h-[14px] '/>
                    <h1>Elevator</h1>
                  </span>
                </div>

                    <p className='text-center text-[12px] text-[#7a520d] inter-300 py-4'>We want to give you the guarantee that our services are very pleasant for the people who have tried them for the rest of them lives i promise very pleasant for the</p>
              
              <div className='flex justify-between px-3 bg-black py-[10px]'>
                    <section className='flex items-center relative gap-2'>
                      <img src={elevator} alt="" className='h-4 '/>
                      <span className='text-[10px] text-white inter-400'>Elevator</span>
                    </section>
                    <section className='flex items-center relative gap-2'>
                      <img src={wheelchair} alt="" className='h-4 '/>
                      <span className='text-[10px] text-white inter-400'>Wheelchair accessible</span>
                    </section>
                    <section className='flex items-center relative ml-3'>
                      <img src={dot} alt="" className='h-8 absolute -left-6'/>
                      <span className='text-[10px] text-white inter-400'>24h Service</span>
                    </section>
              
                </div>
                
            
              
            <section className='flex flex-col'>
                <img src={img} alt="" className='w-80 h-[28rem]' />
            </section>
    
            <section className='flex justify-center gap-3 items-center border-t-[6px] mx-4 pt-5 border-[#7a520dd0] '>
                    <button className='text-[#7a520dd0] inter-400 border py-2 px-3 rounded-md'>Información</button>
                    <button className='bg-[#7a520dd0] text-white py-2 px-4 rounded-md'>Reservación</button>
            </section>

        </div>
        </article>

    </>
  )
}

export default Novalty