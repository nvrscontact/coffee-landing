import React from 'react'
import Reviews from '../Components/Reviews'


import Vertical from '../assets/vertical-image.png'
import OneFood from '../assets/one-food.jpg'
import TwoFood from '../assets/two-food.jpg'
import ThreeFood from '../assets/three-food.jpg'
import FoodImages from '../Components/FoodImages'
import Location from '../assets/location.svg'

function HomePage() {

  const timezone = new Date();
  const hours = String(timezone.getHours())
  const minutes = String(timezone.getMinutes())
  const hour = `${hours}:${minutes}`
  
  let message;

  if (hours >= 7 && hour <= 23){
    message = `Openning 7:00 - 23:00 `;
  }else{
    message = `Coffe closed`;
  }
  console.log(message)


  return (
      <>

      <section className='flex gap-6 m-5 border-b pb-4 border-white/40'>

          <section className='w-40 flex flex-col gap-5 pt-5'>
          
            <section className='flex flex-col'>
              <h1 className='text-[20px] '>Rosseau's Coffe</h1>
              <section className='text-[10px] text-white/40 mt-1 mb-3'>
                <p className='flex gap-2 items-center'>Alcoy, Alicante <img src={Location} alt="" className='h-3' /></p>
                <span> Calle Na Saurina de Entenza 60.</span>
              </section>
            <button className='text-start text-[10px] border rounded-xl w-fit p-2 border-white/40 text-white/50 '>Book appointment</button>
            </section>

            <p className='text-[9px] text-white/60'>New summe recipes, surprise discounts, weeknds with events and a reconditioned envrionment</p>

          </section>

          <section className='flex flex-col text-end'>
            <img src={Vertical} alt="" className=' w-45 rounded-xl mb-2' />
            <span className='text-[10px] pr-4 text-white/40'><span>{message}</span></span>
          </section>

       </section>  

        <section className='flex flex-col gap-10 mb-20'>
          <FoodImages img={OneFood} title={'Katerin'} paragraph={'the best food are here, and you will want to eat!'}/>
          <FoodImages img={TwoFood} title={'The Kuznetsova Bar'} paragraph={'the best food are here, and you will want to eat!'}/>
          <FoodImages img={ThreeFood} title={'Katerin'} paragraph={'the best food are here, and you will want to eat!'}/>
        </section>


      
      <section className='mx-5 mb-15'>
        <h1 className='mb-4 text-white/50 text-[20px] '>What some people say...</h1>
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