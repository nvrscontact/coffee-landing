
import hotel_video from '../assets/hotel_video.mp4'
import arrow from '../assets/arrow.svg'
import Star from '../assets/star.svg'

import {Link} from 'react-router-dom'


function Presentation() {


return (
  <>
    <main className='relative w-full h-[37rem] overflow-hidden'>
      <video  className='object-cover w-full h-full brightness-70' autoPlay muted loop playsInline>
        <source src={hotel_video} type='video/mp4'/>
      </video>

      <section className="absolute top-0 left-0 w-full mt-10 text-white/70">
        <div className='flex flex-col items-start py-3 ml-6 '>
            <h1 className='text-4xl inter-100'>Rosetti's Hotel</h1>
              <section className='text-[12px] flex flex-col space-y-1 items-start text-center '>
                  <h2 className='inter-200 flex itmes-center gap-1 text-[16px] '>Benidorm, Alicante</h2>
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
              </section>
          </div>
      </section>

      <section className='absolute inter-200 text-white/70 bottom-10 right-6 flex flex-col justify-end items-end w-full'>
        <h3 className='text-3xl mb-2'><Link to='/hotel'  className='flex items-center gap-2'>Hotel <img src={arrow} alt="" className='h-4' /></Link></h3>
        <h3 className='text-[18px] pr-2'><Link to='/resort' className='flex items-center gap-2'>Resort <img src={arrow} alt="" className='h-4' /></Link></h3>
        <h3 className='text-[18px] pr-2'><Link to='/restaurant' className='flex items-center gap-2'>Restaurant <img src={arrow} alt="" className='h-4' /></Link></h3>
      </section>
    </main>

    <aside className='bg-black/90 text-white text-[10px] py-[10px] text-center inter-300 mb-20'>
    <span className=''>10% discount on rooms for two persons</span>
    </aside>
  </>
  )
}

/* 7a520d  53390be1*/
export default Presentation