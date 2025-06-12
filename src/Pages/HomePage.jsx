import React from 'react'
import Reviews from '../Components/Reviews'
import Vertical from '../assets/vertical-image.png'

function HomePage() {

  const timezone = new Date();
  const hours = String(timezone.getHours())
  const minutes = String(timezone.getMinutes())
  const hour = `${hours}:${minutes}`
  
  let message;

  if (hour > 7 && hour < 23){
    message = `It's opening ${hour}`;
  }else{
    message = `Ups it's closed ${hour}`;
  }



  return (
      <section className='text-white-300 m-5'>

        <section className='flex items-center gap-6'>
          <section className='mb-10 w-40 flex flex-col'>
            <h1 className=''>Rosseau's Coffe</h1>
            <span className='text-[10px] mb-2'>Your need it or don't, give yourself a chance to come</span>
            <button className='text-start'>Book appointment</button>
          </section>
          <section className='flex flex-col'>
            <img src={Vertical} alt="" className=' w-40' />
            <span className='text-[10px]'><span>{message}</span></span>
          </section>
        </section>


      <section className='flex flex-col gap-4'>
        <Reviews names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
        <Reviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
      </section>

      </section>
  )
}

export default HomePage