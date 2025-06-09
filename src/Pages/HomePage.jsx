import React from 'react'
import Reviews from '../Components/Reviews'

function HomePage() {
  return (
      <section className='text-white-300'>
        <section className='mb-10'>

          <h1>Rosseau's Coffe</h1>
          <span>Welcome!</span>
        </section>

      <section className='flex flex-col gap-4'>
        <Reviews names='Katterin R.' dates='December 2024' paragraph='Excellent food and sprites, during summer is great.' />
        <Reviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
      </section>

      </section>
  )
}

export default HomePage