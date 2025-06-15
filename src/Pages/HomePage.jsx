import React from 'react'
import Reviews from '../Components/Reviews'


import CoffeeShop from '../assets/coffee_shop.jpg'
import OneFood from '../assets/one-food.jpg'
import TwoFood from '../assets/two-food.jpg'
import ThreeFood from '../assets/three-food.jpg'
import FoodImages from '../Components/FoodImages'
import Location from '../assets/location.svg'
import RedCircle from '../assets/redcircle.svg'
import GreenCircle from '../assets/greencircle.svg'

import Schedule from '../assets/schedule.svg'
import Coffe from '../assets/coffe.svg'
import Wifi from '../assets/wifi.svg'
import Wine from '../assets/wine.svg'
import Spoon from '../assets/spoon.svg'

function HomePage() {

  const timezone = new Date();
  const hora = timezone.getHours()
  
  let message;

  if (hora >= 7 && hora <= 23){
    message = `Openning `;
  }else{
    message = `Now Closed`;
  }
  console.log(message)


  return (
      <>

      <div className='flex gap-6 ml-5 pb-4'>

          <div className='w-40 flex flex-col gap-2 pt-5'>
            <section className='flex flex-col'>
              <h1 className='text-[20px] text-[#cea65bc7] fira-sans-extralight'>Rosetti's Coffee</h1>
              <p className='text-[11px] text-white/60 '>
                <span className='flex gap-1 items-center fira-sans-extralight '>Alcoy, Alicante<img src={Location} alt="" className='h-3' /></span>
                <span className='fira-sans-extralight text-[10px] '> Calle Na Saurina de Entenza 60.</span>
              </p>
            </section>

            <section>
              <p className='flex gap-2 text-[12px] text-white/50 border-t border-white/20 py-3 cormorant-400'>
              <span><img src={Wine} alt="" className='h-4' /></span>
              <span><img src={Coffe} alt="" className='h-4' /></span>
              <span><img src={Spoon} alt="" className='h-4' /></span>
              <span><img src={Wifi} alt="" className='h-4' /></span>
              </p>

              <p className='flex flex-col gap-1 text-[10px] text-white/30 '>
                <span>Do you work here.</span>
                <span>Variety of drinks and wines </span>
                <span>Good ilmumination and concentration </span>
              </p>
            </section>
          </div>
            
            <section className='flex flex-col gap-2 text-[10px] text-white/60 '>
                <img src={CoffeeShop} alt="" className='w-48 h-52 rounded-xl' />
                <section className='flex items-center gap-2'>
                  <button className='p-2 gap-1 flex items-center border border-white/30 rounded-xl w-fit'><img src={Schedule} alt="" className='h-[10px] '/> Make Reservation</button>
                  <span className='text-[9px] text-center'><span>{message}</span></span>
                </section>  
            </section>

       </div>  

      <div className='flex flex-col gap-10 mb-20'>
        <FoodImages img={OneFood} title={'Katerin'} paragraph={'the best food are here, and you will want to eat!'}/>
        <FoodImages img={TwoFood} title={'The Kuznetsova Bar'} paragraph={'the best food are here, and you will want to eat!'}/>
        <FoodImages img={ThreeFood} title={'Katerin'} paragraph={'the best food are here, and you will want to eat!'}/>
      </div>


      
      <div className='mx-5 mb-10'>
        <h1 className='mb-4 text-white/50 text-[20px] cormorant-400'>What some people say...</h1>
        <section className='flex flex-col gap-4'>
          <Reviews names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
          <Reviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
          <Reviews names='Jennifer' dates='April 2023' paragraph='Its unique.' />
        </section>
      </div>

      </>
  )
}

export default HomePage