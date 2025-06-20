import React from 'react'
import Reviews from '../Components/Reviews'


import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Grid_Coffe_Two from '../assets/grid_coffee_two.jpg'
import Grid_Coffe_Three from '../assets/grid_coffee_three.jpg'

import Location from '../assets/location.svg'

import Schedule from '../assets/schedule.svg'
import Coffe from '../assets/coffe.svg'
import Wifi from '../assets/wifi.svg'
import Wine from '../assets/wine.svg'
import Spoon from '../assets/spoon.svg'
import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'

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
  
      <div className='flex gap-1 my-8 mx-4 pb-4 fira-sans-thin '>

          <section className='flex flex-col pr-2 my-2'>

              <h1 className='text-[24px] text-[#cea65bc7] fira-sans-extralight'>Rosetti's Coffee</h1>
              
              <div className='w-40 flex flex-col gap-2'>

                <div className='flex flex-col'>
                  <p className='text-[11px] text-white/60 '>
                    <span className='flex gap-1 items-center fira-sans-extralight '>Alcoy, Alicante<img src={Location} alt="" className='h-3' /></span>
                    <span className='fira-sans-extralight text-[10px] '> Calle Na Saurina de Entenza 60.</span>
                  </p>
                </div>

                <section>
                  <p className='flex gap-2 text-[12px] text-white/50 border-t border-white/20 pt-3'>
                    <span><img src={Wine} alt="" className='h-4' /></span>
                    <span><img src={Coffe} alt="" className='h-4' /></span>
                    <span><img src={Spoon} alt="" className='h-4' /></span>
                    <span><img src={Wifi} alt="" className='h-4' /></span>
                  </p>

                  <p className='flex flex-col gap-1 text-[10px] text-white/60 my-3'>
                    <span className='bg-white/10 p-1'>Monday - Friday (9:00 to 22:00)  </span>
                    <span className='bg-white/10 p-1'>Sunday - Saturday (9:00 to 20:00) </span>
                    <span className='bg-white/10 p-1'>Good ilmumination </span>
                  </p>
                </section>
              </div>

          </section>
            
          <section className='flex flex-col items-center gap-2 text-[10px] text-white/60'>
               
                <section className='grid grid-cols-2 grid-rows-2 gap-2'>
                  <img src={Grid_Coffe_One} alt="" className='h-24 w-20 object-cover rounded-xs' />
                  <img src={Grid_Coffe_Two} alt="" className='h-24 w-20 object-cover rounded-xs' />
                  <img src={Grid_Coffe_Three} alt="" className='h-24 col-span-2 rounded-xs' />
                </section>

                <section className='flex flex-col gap-1'>
                  <button className='p-2 gap-1 flex items-center w-fit text-white bg-white/10'><img src={Schedule} alt="" className='h-[10px] '/>Reservations</button>
                  <span className='text-[9px] text-center'><span>{message}</span></span>
                </section>  

          </section>

      </div>  



      <div className='mb-6 mx-3 flex flex-col gap-10'>
        <h1 className='text-center'>Our three best and most <br />sold dishes</h1>

        <section className=''>
          <h1 className='text-[#cea65bc7]'>The Plate Imaginatel</h1>
          <section className='flex items-center gap-2 text-[9px] mb-1 '>
              <section className='flex'>
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star_Out} alt="" className='h-4' />
                  <img src={Star_Out} alt="" className='h-4' />
              </section>
            <span className='bg-white/30 p-[3px] text-[#cea65bc7] '>+13 reviews</span>
            <span>hola</span>
                      
          </section>
          <p className='text-[9px] max-w-60 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet facere.</p>
          <img src={Grid_Coffe_One} alt="" className='h-80' />
        </section>

        <section className='flex flex-col items-end'>
          <h1 className='text-[#614513c7] pb-1'>The Plate Imaginatel</h1>
          <p className='text-[9px] max-w-60 text-white/50 pb-4 text-end'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est</p>
          <img src={Grid_Coffe_Two} alt="" className='h-80 w-fit ' />
        </section>

        <section className=''>
          <h1 className='text-[#cea65bc7] pb-1'>The Plate Imaginatel</h1>
          <p className='text-[9px] max-w-60 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet</p>
          <img src={Grid_Coffe_One} alt="" className='h-80' />
        </section>
      </div>


      <div className='mx-5 my-13'>
        <h1 className='text-white/50 text-[20px] mb-6 fira-sans-extralight'>What some people say...</h1>
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