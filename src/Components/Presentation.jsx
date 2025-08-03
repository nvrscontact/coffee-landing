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
      <div className='mt-8 mb-20 '>

              <section className='text-end flex flex-col items-end mr-5'>
                <h1 className='text-4xl text-[#7a520d] inter-200'>Rosetti's Hotel</h1>
                <div className='flex ml-2 mb-1 [&>*]:h-5 '>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <span className='text-[12px] pt-[3px] text-black/70 inter-300 '>4,5</span>
                </div>
                <p className='text-[12px] mb-1 flex flex-col items-center text-[#63430b] text-center '>
                    <span className='inter-300'>Calle Na Saurina de Entenza 60.</span>
                    <span className='inter-300 flex itmes-center gap-1 '>Benidorm, Alicante</span>
                </p>
              </section>

              <section className='flex flex-col justify-center items-center text-black inter-200'>
                <div className='flex gap-2'>
                  <section className='text-center space-y-2'>
                    <h1 className='bg-[#7a520dd5]  py-[6px] px-3  text-white'>Resort</h1>
                    <img src={resort_hotel} alt="" className=' w-28 h-62 ' />
                      <div className='flex flex-col items-center   '>
                      <section className='py-2 px-8 bg-[#1b1b1bd5]'>
                      <img src={poolWhite} alt="" className='h-6  ' />
                      </section>
                      <span className='text-[#1b1b1bd5] inter-500 text-[12px] border-t border-[#1b1b1bd5] px-8 py-2 mt-1 '>Pool </span>
                    </div>
                  </section>
                  <section className='mt-10 text-center space-y-2'>
                    <h1 className='bg-[#7a520dd5] text-white py-[6px] px-3 '>Hosting</h1>
                    
                    <img src={restaurant_hotel} alt="" className=' w-28 h-62' />
                      <div className='flex flex-col items-center   '>
                      <section className='py-2 px-8 bg-[#1b1b1bd5]'>
                      <img src={parkingWhite} alt="" className='h-6  ' />
                      </section>
                      <span className='text-[#1b1b1bd5] inter-500 text-[12px] border-t border-[#1b1b1bd5] px-2 py-2 mt-1 '>Parking Free</span>
                    </div>
                  </section>
                  <section className='mt-20 text-center space-y-2'>
                    <h1 className='bg-[#7a520dd5]  py-[6px] px-3  text-white '>Restaurant</h1>
                    <img src={hosting_hotel} alt="" className=' w-28 h-62' />
                    <div className='flex flex-col items-center '>
                      <section className='py-2 px-8 bg-[#1b1b1bd5]'>
                      <img src={barWhite} alt="" className='h-6  ' />
                      </section>
                      <span className='text-[#1b1b1bd5] inter-500 text-[12px] border-t border-[#1b1b1bd5] px-4 py-2 mt-1 '>Bar & Rest </span>
                    </div>
                  </section>
                </div>
              </section>

        </div>  
    </>
  )
}

export default Presentation