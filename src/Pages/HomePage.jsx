import React from 'react'
import Reviews from '../Components/Reviews'


import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Grid_Coffe_Two from '../assets/grid_coffee_two.jpg'
import Grid_Coffe_Three from '../assets/grid_coffee_three.jpg'


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
  
      <div className='flex gap-1 m-5 pb-4 fira-sans-thin '>

          <div className='flex flex-col pr-2'>

            <h1 className='text-[24px] text-[#cea65bc7] fira-sans-extralight'>Rosetti's Coffee</h1>
            
            <div className='w-40 flex flex-col gap-2'>

            <section className='flex flex-col'>
              <p className='text-[11px] text-white/60 '>
                <span className='flex gap-1 items-center fira-sans-extralight '>Alcoy, Alicante<img src={Location} alt="" className='h-3' /></span>
                <span className='fira-sans-extralight text-[10px] '> Calle Na Saurina de Entenza 60.</span>
              </p>
            </section>

            <section>
              <p className='flex gap-2 text-[12px] text-white/50 border-t border-white/20 py-3'>
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

          </div>
            
          <section className='flex flex-col items-center gap-2 text-[10px] text-white/60'>
               
                <section className='grid grid-cols-2 grid-rows-2 gap-2'>
                <img src={Grid_Coffe_One} alt="" className='h-24 w-20 object-cover rounded-xs' />
                <img src={Grid_Coffe_Two} alt="" className='h-24 w-20 object-cover rounded-xs' />
                <img src={Grid_Coffe_Three} alt="" className='h-24 col-span-2 rounded-xs' />
                </section>

                <section className='flex items-center gap-2'>
                  <button className='p-2 gap-1 flex items-center rounded-[8px] w-fit text-white bg-white/10'><img src={Schedule} alt="" className='h-[10px] '/>Reservations</button>
                  <span className='text-[9px] text-center'><span>{message}</span></span>
                </section>  

          </section>

      </div>  

      <div className='mb-6 mx-3 flex flex-col gap-10'>
        <h1 className='text-center'>Our three best and most <br />sold dishes</h1>

        <section className=''>
          <h1 className='text-[#cea65bc7] pb-1'>The Plate Imaginatel</h1>
          <p className='text-[9px] max-w-60 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet facere.</p>
          <img src={Grid_Coffe_One} alt="" className='h-80' />
        </section>

        <section className='flex flex-col items-end'>
          <h1 className='text-[#cea65bc7] pb-1'>The Plate Imaginatel</h1>
          <p className='text-[9px] max-w-60 text-white/50 pb-4 text-end'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est</p>
          <img src={Grid_Coffe_Two} alt="" className='h-80 w-fit ' />
        </section>

        <section className=''>
          <h1 className='text-[#cea65bc7] pb-1'>The Plate Imaginatel</h1>
          <p className='text-[9px] max-w-60 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet</p>
          <img src={Grid_Coffe_One} alt="" className='h-80' />
        </section>
      </div>


      <div className='mx-5 mb-6'>
        <h1 className='mb-4 text-white/50 text-[20px]'>What some people say...</h1>
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