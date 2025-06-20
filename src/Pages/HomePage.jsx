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
  
        <span className='text-[9px] flex justify-center my-3 text-white/30 fira-sans-extralight'><span>Currently {message}</span></span>
      <div className='flex justify-between gap-1 mb-8 pb-4 fira-sans-thin '>
          <section className='flex flex-col my-2 ml-4'>

              <h1 className='text-[24px] text-[#cea65bc7] fira-sans-extralight pb-1'>Rosetti's Coffee</h1>
              
              <div className='w-40 flex flex-col'>
                <div className='flex flex-col pb-2'>
                  <p className='text-[11px] text-white/60 '>
                    <span className='flex gap-1 items-center fira-sans-extralight '>Alcoy, Alicante<img src={Location} alt="" className='h-3' /></span>
                    <span className='fira-sans-extralight text-[10px] '> Calle Na Saurina de Entenza 60.</span>
                  </p>
                </div>

                <section>
                  <p className='flex gap-2 text-[12px] text-white/50 border-t border-white/20 py-3'>
                    <span><img src={Wine} alt="" className='h-4' /></span>
                    <span><img src={Coffe} alt="" className='h-4' /></span>
                    <span><img src={Spoon} alt="" className='h-4' /></span>
                    <span><img src={Wifi} alt="" className='h-4' /></span>
                  </p>

                  <p className='flex flex-col gap-1 text-[10px] text-white/90'>
                    <span className='bg-white/10 p-[6px] rounded-[6px]'>Monday - Friday (9:00 to 22:00)  </span>
                    <span className='bg-white/10 p-[6px] rounded-[6px]'>Sunday - Saturday (9:00 to 20:00) </span>
                    <span className='bg-white/10 p-[6px] rounded-[6px]'>Good ilmumination </span>
                  </p>
                </section>
              </div>

          </section>
            
          <section className='flex flex-col items-center gap-2 text-[10px] text-white/70 mr-2'>
               
                  <img src={Grid_Coffe_One} alt="" className='h-52 w-32 object-cover rounded-xl' />

                <section className='flex flex-col gap-1'>
                  <button className='p-[6px] gap-1 flex items-center w-fit text-white bg-white/10 text-[11px] rounded-[6px] '>Reservations</button>
                </section>  

          </section>

      </div>  



      <div className='mb-20 mx-5 flex flex-col gap-10'>
        <section className='flex flex-col fira-sans-extralight my-12'>
          <h1 className='text-start text-[20px] text-white/50 pb-1'>Our three most sold dishes...</h1>
          <section className='flex items-center gap-2 text-[11px] border-b pb-4 border-white/30 text-white/50'>
            <span className='bg-white/10 p-1 rounded-[6px]'>Savoy</span>
            <span className='bg-white/10 p-1 rounded-[6px]'>Free delivery from 25 €</span>
            <span className='bg-white/10 p-1 rounded-[6px]'>Savoy</span>
          </section>
        </section>

        <section className='mb-12'>
          <h1 className='text-[#cea65bc7]'>The Plate Imaginatel</h1>
          <section className='flex items-center gap-2 text-[9px] mb-1 '>
              <section className='flex'>
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star_Out} alt="" className='h-4' />
                  <img src={Star_Out} alt="" className='h-4' />
              </section>
            <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>+13 reviews</span>
            <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
          </section>
          <p className='text-[9px] max-w-60 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet facere.</p>
          <img src={Grid_Coffe_One} alt="" className='h-80' />
        </section>

        <section className='flex flex-col items-end mb-12'>
          <h1 className='text-[#cea65bc7]'>The Plate Imaginatel</h1>
          <section className='flex items-center gap-2 text-[9px] mb-1 '>
              <section className='flex'>
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star} alt="" className='h-4' />
                  <img src={Star_Out} alt="" className='h-4' />
                  <img src={Star_Out} alt="" className='h-4' />
              </section>
            <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>+13 reviews</span>
            <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
          </section>
          <p className='text-[9px] max-w-60 text-white/50 pb-4 text-end'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est</p>
          <img src={Grid_Coffe_Two} alt="" className='h-80 w-fit ' />
        </section>

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
            <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>+13 reviews</span>
            <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
          </section>
          <p className='text-[9px] max-w-60 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet facere.</p>
          <img src={Grid_Coffe_One} alt="" className='h-80' />
        </section>
      </div>


      <div className='mx-5'>
        <h1 className='pb-4 text-white/50 text-[20px] fira-sans-extralight border-b border-white/30'>What some people say...</h1>
        <section className='flex flex-col gap-4 my-8'>
          <Reviews names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
          <Reviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
          <Reviews names='Jennifer' dates='April 2023' paragraph='Its unique.' />
        </section>
      </div>
      

      </>
  )
}

export default HomePage