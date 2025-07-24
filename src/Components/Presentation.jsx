import React from 'react'
import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Location from '../assets/location.svg'
import Coffe from '../assets/coffe.svg'
import Wifi from '../assets/wifi.svg'
import Wine from '../assets/wine.svg'
import Spoon from '../assets/spoon.svg'
import Hotelbg from '../assets/hotelbg.jpg'
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
                  <h1 className='text-3xl text-[#7a520d] inter-300'>Rosetti's Hotel</h1>
                    <p className='text-[12px] flex flex-col items-center mt-1 text-white/60 text-center '>
                      <span className='inter-200'>Calle Na Saurina de Entenza 60.</span>
                      <span className='inter-200 flex itmes-center gap-1 '>Alcoy, Alicante</span>
                    </p>
              </section>

              <section className='flex gap-2 mt-3 text-white/70 inter-200'>

                <div className=' flex flex-col items-center gap-3 '>
                  <h1 className='text-[12px] bg-[#3b2808] py-1 px-2 rounded-md'>Bar</h1>
                </div>

                <div className=' flex flex-col items-center gap-3 '>
                  <h1 className='text-[12px] bg-[#3b2808] py-1 px-2 rounded-md'>Restaurant</h1>
                </div>

                <div className=' flex flex-col items-center gap-3 '>
                  <h1 className='text-[12px] bg-[#3b2808] py-1 px-2 rounded-md'>Hosting</h1>
                </div>
                
              </section>

              <img src={Hotelbg} alt="" className='mt-10 opacity-60 ' />

        </div>  
    </>
  )
}

export default Presentation