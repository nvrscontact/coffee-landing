import React from 'react'
import Reviews from '../Components/Reviews'
import Vertical from '../assets/vertical-image.png'

function HomePage() {

  const timezone = new Date();
  const hours = String(timezone.getHours())
  const minutes = String(timezone.getMinutes())
  const hour = `${hours}:${minutes}`
  
  let message;

  if (hours >= '7' || hour <= '23'){
    message = `Openning ${hour}`;
  }else{
    message = `Ups it's closed ${hour}`;
  }
  console.log(message)


  return (
      <section className='text-white-300 m-5'>

        <section className='flex items-center gap-6'>
          <section className='flex flex-col'>
            <section className='w-40 flex flex-col'>
              <h1 className='text-[20px] '>Rosseau's Coffe</h1>
              <span className='text-[10px] mb-4 text-gray-400 '>Your need it or don't, give yourself a chance to come</span>
            </section>
            <button className='text-start text-[12px] border rounded-xl w-fit p-2 border-white/30 '>Book appointment</button>
          </section>
          <section className='flex flex-col text-center'>
            <img src={Vertical} alt="" className=' w-40 rounded-xl mb-2' />
            <span className='text-[10px]'><span>{message}</span></span>
          </section>
        </section>


      <section className='flex flex-col gap-4'>
        <Reviews names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
        <Reviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
        <Reviews names='Jennifer' dates='April 2023' paragraph='Its unique.' />
      </section>

      </section>
  )
}

export default HomePage