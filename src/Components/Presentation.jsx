import React from 'react'
import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Location from '../assets/location.svg'
import Coffe from '../assets/coffe.svg'
import Wifi from '../assets/wifi.svg'
import Wine from '../assets/wine.svg'
import Spoon from '../assets/spoon.svg'
import Hotelbg from '../assets/hotelbg.jpg'
import ParkingGray from '../assets/parking_gray.svg'
import PoolGray from '../assets/pool_gray.svg'
import WifiGray from '../assets/wifi_gray.svg'
import BarGray from '../assets/bar_gray.svg'
import GymGray from '../assets/gym_gray.svg'
import SpaGray from '../assets/spa_gray.svg'
import Star from '../assets/star.svg'

import Benefits from '../Components/SubComponents/Benefits'

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
      <div className='flex flex-col items-center justify-center mt-10 fira-sans-thin '>

              <section className='flex flex-col '>
                  <h1 className='text-4xl text-[#7a520d] fira-sans-extralight'>Rosetti's Hotel</h1>
                  
                    <p className='text-[13px] flex flex-col items-center text-white/50 text-center '>
                      <span className='inter-200'>Calle Na Saurina de Entenza 60.</span>
                      <span className='inter-200 flex itmes-center gap-1 '>Benidorm, Alicante</span>
                    </p>

                    <div className='flex justify-center items-center mt-1'>
                    <img src={Star} alt="" className='h-[18px]' />
                    <img src={Star} alt="" className='h-[18px] ' />
                    <img src={Star} alt="" className='h-[18px]' />
                    <img src={Star} alt="" className='h-[18px]' />
                    <img src={Star} alt="" className='h-[18px]' />
                    <span className='text-[12px] ml-1 pt-[3px] text-white/70 '>4,5</span>
                  </div>
              </section>

              <section className='flex gap-2 mt-3 text-white/70 inter-200'>

                <div className=' flex flex-col items-center gap-3 '>
                  <h1 className='text-[14px] bg-[#3a2109] py-1 px-2 rounded-[4px] '>Resort</h1>
                </div>

                <div className=' flex flex-col items-center gap-3 '>
                  <h1 className='text-[14px] bg-[#3a2109] py-1 px-2 rounded-[4px]'>Hosting</h1>
                </div>

                <div className=' flex flex-col items-center gap-3 '>
                  <h1 className='text-[14px] bg-[#3a2109] py-1 px-2 rounded-[4px]'>Restaurant</h1>
                </div>
                
              </section>
              

              <section className='flex flex-col justify-center items-center'>
                <img src={Hotelbg} alt="" className='mt-10 opacity-40 ' />


                <div className='mt-6 flex gap-1 text-white/80 '>
                  
                 <Benefits img={ParkingGray} title={'Parking Free'}/>
                 <Benefits img={PoolGray} title={'Pool'}/>
                 <Benefits img={WifiGray} title={'Wifi Free 80 Mbps'}/>
              
                </div>

                <div className='mt-3 flex gap-1 text-white/80'>
                
                 <Benefits img={BarGray} title={'Bar'}/>
                 <Benefits img={SpaGray} title={'Spa & Sauna'}/>
                 <Benefits img={GymGray} title={'Gym'}/>
                </div>


              </section>

        </div>  
    </>
  )
}

export default Presentation