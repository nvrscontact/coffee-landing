import React from 'react'
import Reviews from '../Components/Reviews'


import Vertical from '../assets/vertical-image.png'
import OneFood from '../assets/one-food.jpg'
import TwoFood from '../assets/two-food.jpg'
import ThreeFood from '../assets/three-food.jpg'
import FoodImages from '../Components/FoodImages'
import Location from '../assets/location.svg'
import RedCircle from '../assets/redcircle.svg'
import GreenCircle from '../assets/greencircle.svg'

import Schedule from '../assets/schedule.svg'
import Coffee from '../assets/coffee.svg'
import Wine from '../assets/wine.svg'
import Wifi from '../assets/Wifi.svg'

function HomePage() {

  const timezone = new Date();
  const hora = timezone.getHours()
  
  let message;

  if (hora >= 7 && hora <= 23){
    message = `Openning 7:00 - 23:00 `;
  }else{
    message = `Now Closed`;
  }
  console.log(message)


  return (
      <>

      <section className='flex gap-6 m-5 border-b pb-4 border-white/40'>

          <section className='w-40 flex flex-col gap-2 pt-5'>
          
            <section className='flex flex-col'>
              <h1 className='text-[18px] text-[#cea65bc7]'>Rosetti's Coffee</h1>
              <section className='text-[11px] text-white/60 '>
                <p className='flex gap-1 items-center cormorant-400 '>Alcoy, Alicante<img src={Location} alt="" className='h-3' /></p>
                <span className='cormorant-400'> Calle Na Saurina de Entenza 60.</span>
              </section>
            </section>

          <section>

            <p className='flex gap-2 text-[12px] text-white/50 border-t border-white/20 py-3 cormorant-400'>
            <span><img src={Coffee} alt="" className='h-4' /></span>
            <span><img src={Schedule} alt="" className='h-4' /></span>
            <span><img src={Wine} alt="" className='h-4' /></span>
            <span><img src={Wifi} alt="" className='h-4' /></span>
            </p>

            <p className='flex flex-col gap-1 text-[9px] text-white/30 '>
              <span>Do you work here.</span>
              <span>Variety of drinks and wines </span>
              <span>Good ilmumination and concentration </span>
            </p>
          </section>

          </section>
            <section className='flex flex-col '>
            <section className='relative mb-2 items-center'>
              <img src={Vertical} alt="" className=' w-45 rounded-xl' />
              <p className='absolute bottom-2 left-6'>
               <button className='px-4 p-2 flex gap-1 items-center text-[10px] text-[#c7c7c7] border border-white/30 rounded-xl backdrop-blur-xl'><img src={Schedule} alt="" className='h-[10px] ' /> Make Reservation</button>
              </p>
            </section>
              <span className='text-[9px] text-center text-[#cea65bc7] ml-2'><span>{message}</span></span>
            </section>
       </section>  

        <section className='flex flex-col gap-10 mb-20'>
          <FoodImages img={OneFood} title={'Katerin'} paragraph={'the best food are here, and you will want to eat!'}/>
          <FoodImages img={TwoFood} title={'The Kuznetsova Bar'} paragraph={'the best food are here, and you will want to eat!'}/>
          <FoodImages img={ThreeFood} title={'Katerin'} paragraph={'the best food are here, and you will want to eat!'}/>
        </section>


      
      <section className='mx-5 mb-15'>
        <h1 className='mb-4 text-white/50 text-[20px] cormorant-400'>What some people say...</h1>
        <section className='flex flex-col gap-4'>
          <Reviews names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
          <Reviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
          <Reviews names='Jennifer' dates='April 2023' paragraph='Its unique.' />
        </section>
      </section>

      </>
  )
}

export default HomePage