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
import arrow from '../assets/arrow.svg'

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
              <section className='relative w-full h-[37rem] overflow-hidden'>
                <video  className='relative object-cover w-full ' autoPlay muted loop playsInline>
                  <source src={hotel_video} type='video/mp4' />
                </video>

                   <div className="absolute top-0 left-0 w-full mt-10 text-white/70">
                      <section className='flex flex-col items-start py-3 ml-6 '>
                          <h1 className='text-4xl inter-100'>Rosetti's Hotel</h1>
                            <p className='text-[12px] flex flex-col space-y-1 items-start text-center '>
                                <span className='inter-200 flex itmes-center gap-1 text-[16px] '>Benidorm, Alicante</span>
                                  <section className='flex gap-1 items-center'>
                                    <div className='flex [&>*]:h-[18px] -space-x-0.5 '>
                                      <img src={Star} alt="" />
                                      <img src={Star} alt="" />
                                      <img src={Star} alt="" />
                                      <img src={Star} alt="" />
                                      <img src={Star} alt="" />
                                    </div>
                                    <span className='text-[10px] inter-300 '>4,7 / 5</span>
                                  </section>
                            </p>
                        </section>
                  </div>

                  <div className='absolute inter-200 text-white/70 bottom-10 right-6 space-y-3 flex flex-col justify-end items-end w-full'>
                    <h3 className='text-2xl flex items-center gap-3 '>Hotel <img src={arrow} alt="" className='h-4' /></h3>
                    <h3 className='text-2xl flex items-center gap-3 '>Resort <img src={arrow} alt="" className='h-4' /></h3>
                    <h3 className='text-2xl flex items-center gap-3 '>Restaurant <img src={arrow} alt="" className='h-4' /></h3>
                  </div>


              </section>

         <div className='bg-black/90 text-white text-[10px] py-2 text-center inter-300 mb-20'>
          <span className=''>10% discount on rooms for two persons</span>
        </div>
    </>
  )
}

/* 7a520d  53390be1*/
export default Presentation