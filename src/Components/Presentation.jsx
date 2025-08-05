import resort_hotel from '../assets/resort_hotel.jpg'
import restaurant_hotel from '../assets/restaurant_hotel.jpg'
import hosting_hotel from '../assets/hosting_hotel.jpg'
import Hotelbg from '../assets/hotelbg.jpg'

import parkingWhite from '../assets/parkingWhite.svg'
import poolWhite from '../assets/poolWhite.svg'
import wifiWhite from '../assets/wifiWhite.svg'
import barWhite from '../assets/barWhite.svg'
import gymWhite from '../assets/gymWhite.svg'
import spaWhite from '../assets/spaWhite.svg'
import hotel_video from '../assets/hotel_video.mp4'

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
      <div className='mb-20 '>
              <section className='relative w-full h-[37rem] overflow-hidden'>
                <video  className='absolute object-cover w-full h-full ' autoPlay loop muted>
                  <source src={hotel_video} type='video/mp4' />
                </video>

                  <div className="absolute top-0 left-0 w-full h-full mt-5 ">
                      <section className='flex flex-col items-center mb-5'>
                         <div className='flex flex-col items-center gap-1 mb-4 '>
                          <section className='flex gap-1 items-end ml-2'>
                          <div className='flex [&>*]:h-4 -space-x-0.5 '>
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                          </div>
                            <span className='text-[10px] text-black/70 inter-300 '>4,5</span>
                          </section>
                       </div>
                         <h1 className='text-4xl text-white inter-200'>Rosetti's Hotel</h1>
                          <p className='text-[12px] mb-1 flex flex-col items-center text-white text-center '>
                          <span className='inter-300 flex itmes-center gap-1 text-[14px] '>Benidorm, Alicante</span>
                         </p>
                       </section>
                  </div>

                  <div className='absolute inter-200 text-white/70 bottom-10 left-10 space-y-3'>
                    <h1 className='text-2xl'>Hotel</h1>
                    <h2 className='text-2xl pl-4'>Resort</h2>
                    <h3 className='text-2xl pl-8'>Restaurant</h3>
                  </div>

              </section>
        </div>  
    </>
  )
}

/* 7a520d */
export default Presentation