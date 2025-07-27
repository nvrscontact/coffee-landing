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
      <div className='flex flex-col items-center justify-center mt-10 mb-20 '>

              <section className='flex flex-col text-center'>
                <h1 className='text-4xl text-[#7a520d] inter-200'>Rosetti's Hotel</h1>
                <div className='flex justify-center items-center ml-2 mb-1 [&>*]:h-5 '>
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <span className='text-[12px] pt-[3px] text-black/70 inter-300 '>4,5</span>
                </div>
                <p className='text-[14px] mb-1 flex flex-col items-center text-[#63430b] text-center '>
                    <span className='inter-300'>Calle Na Saurina de Entenza 60.</span>
                    <span className='inter-300 flex itmes-center gap-1 '>Benidorm, Alicante</span>
                </p>
                <section className='flex gap-2 mt-2 text-white/70 inter-300'>
                    <div className=' flex flex-col items-center gap-3 '>
                      <h1 className='text-[14px] bg-[#7a520dbd]  py-[6px] px-3 '>Resort</h1>
                    </div>

                    <div className=' flex flex-col items-center gap-3 '>
                      <h1 className='text-[14px] bg-[#7a520dbd]  py-[6px] px-3 '>Hosting</h1>
                    </div>

                    <div className=' flex flex-col items-center gap-3 '>
                      <h1 className='text-[14px] bg-[#7a520dbd] py-[6px] px-3'>Restaurant</h1>
                    </div>
              
                  </section>
              </section>

              <section className='flex flex-col justify-center items-center text-black inter-200'>
                <div className='w-full flex flex-col mt-6 mb-4'>
                <span className='h-[1px] border border-[#7a520d5d] mx-4 '></span>
                <img src={Hotelbg} alt="" className='opacity-90 my-2' />
                <span className='h-[1px] border border-[#7a520d5d] mx-4 '></span>
                </div>
                <div className='flex gap-2 '>
                  <Benefits img={poolWhite} title={'Pool'}/>
                  <Benefits img={wifiWhite} title={'Wifi 80 Mbps'}/>
                  <Benefits img={barWhite} title={'Bar'}/>
                  <Benefits img={parkingWhite} title={'Parking'}/>
                  <Benefits img={spaWhite} title={'Spa'}/>
                  <Benefits img={gymWhite} title={'Gym'}/>
                </div>
              </section>

        </div>  
    </>
  )
}

export default Presentation