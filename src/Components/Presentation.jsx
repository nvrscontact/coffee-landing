import Hotelbg from '../assets/hotelbg.jpg'

import parkingGold from '../assets/parkingGold.svg'
import poolGold from '../assets/poolGold.svg'
import wifiGold from '../assets/wifiGold.svg'
import barGold from '../assets/barGold.svg'
import gymGold from '../assets/gymGold.svg'
import spaGold from '../assets/spaGold.svg'

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

            <div className='flex justify-center items-center ml-2 [&>*]:h-6 '>
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <span className='text-[12px] ml-1 pt-1 text-black/70 inter-300 '>4,5</span>
              </div>


              <section className='flex flex-col text-center'>
                  <h1 className='text-4xl text-[#7a520d] inter-200 mb-1'>Rosetti's Hotel</h1>
                      <p className='text-[13px] mb-1 flex flex-col items-center text-[#63430b] text-center '>
                          <span className='inter-300'>Calle Na Saurina de Entenza 60.</span>
                          <span className='inter-300 flex itmes-center gap-1 '>Benidorm, Alicante</span>
                      </p>
                    <section className='flex gap-2 mt-2 text-white/70 inter-200'>

                        <div className=' flex flex-col items-center gap-3 '>
                          <h1 className='text-[14px] bg-[#7a520d]  py-[6px] px-3 rounded-xl '>Resort</h1>
                        </div>

                        <div className=' flex flex-col items-center gap-3 '>
                          <h1 className='text-[14px] bg-[#7a520d]  py-[6px] px-3 rounded-xl'>Hosting</h1>
                        </div>

                        <div className=' flex flex-col items-center gap-3 '>
                          <h1 className='text-[14px] bg-[#7a520d] py-[6px] px-3 rounded-xl'>Restaurant</h1>
                        </div>
                  
                      </section>
                  
                  
                
                  
                    



              </section>

          
              

              <section className='flex flex-col justify-center items-center text-black inter-200'>
                <img src={Hotelbg} alt="" className=' opacity-40 mt-6 mb-4' />


                <div className=' flex gap-2 '>
                  
                 <Benefits img={parkingGold} title={'Parking Free'}/>
                 <Benefits img={poolGold} title={'Pool'}/>
                 <Benefits img={wifiGold} title={'Wifi Free 80 Mbps'}/>
              
                </div>

                <div className='mt-3 flex gap-2'>
                
                 <Benefits img={barGold} title={'Bar'}/>
                 <Benefits img={spaGold} title={'Spa & Sauna'}/>
                 <Benefits img={gymGold} title={'Gym'}/>
                </div>


              </section>

        </div>  
    </>
  )
}

export default Presentation