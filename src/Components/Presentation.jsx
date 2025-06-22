import React from 'react'
import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Location from '../assets/location.svg'
import Coffe from '../assets/coffe.svg'
import Wifi from '../assets/wifi.svg'
import Wine from '../assets/wine.svg'
import Spoon from '../assets/spoon.svg'
import {Link} from 'react-router-dom'


function Presentation() {

  /* Currently Oppening Timezone */
  const timezone = new Date();
  const hora = timezone.getHours()
  let message;
  if (hora >= 7 && hora <= 23){message = `Openning `}
  else{message = `Closed`;}


  return (
    <>
    <div className='flex justify-between gap-1 mt-8 fira-sans-thin '>
              <section className='flex flex-col my-2 ml-4'>
    
                  <h1 className='text-[24px] text-[#9e763b] fira-sans-extralight'>Rosetti's Coffee</h1>
                  
                  <div className='w-40 flex flex-col'>
                    <div className='flex flex-col pb-2'>
                      <p className='text-[11px] text-white/60 '>
                        <span className='flex gap-1 items-center fira-sans-extralight '>Alcoy, Alicante<img src={Location} alt="" className='h-3' /></span>
                        <span className='fira-sans-extralight text-[10px] '> Calle Na Saurina de Entenza 60.</span>
                      </p>
                    </div>
    
                    <section>
                      <p className='flex gap-2 text-[12px] text-white/50 border-t border-white/20 py-3'>
                        <span><img src={Wine} alt="" className='h-4' /></span>
                        <span><img src={Coffe} alt="" className='h-4' /></span>
                        <span><img src={Spoon} alt="" className='h-4' /></span>
                        <span><img src={Wifi} alt="" className='h-4' /></span>
                      </p>
    
                      <p className='flex flex-col gap-1 text-[10px] text-white/90'>
                        <span className='bg-white/10 p-[6px] rounded-[6px] w-fit '>Monday - Friday (9:00 to 22:00)  </span>
                        <span className='bg-white/10 p-[6px] rounded-[6px] w-fit'>Sunday - Saturday (9:00 to 20:00) </span>
                        <span className='bg-white/10 p-[6px] rounded-[6px] w-fit'>Good ilmumination </span>
                      </p>
                    </section>
                  </div>
    
              </section>
                
              <section className='flex flex-col items-center gap-2 text-[10px] text-white/70 mr-4 fira-sans-light'>
    
                    <span className='text-white/50'><span>Currently {message}</span></span>
    
                    <img src={Grid_Coffe_One} alt="" className='h-52 w-32 object-cover rounded-xl' />

                    <button className='py-[7px] px-[2px] rounded-[8px] border border-white/20' >
                    <Link to='/reservations' className='bg-white/10 py-[7px] px-[8px] rounded-[6px]'>Make Reservation</Link>
                    </button>
    
              </section>
    
          </div>  
    </>
  )
}

export default Presentation