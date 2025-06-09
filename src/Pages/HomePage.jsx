import React from 'react'
import Reviews from '../Components/Reviews'

function HomePage() {
  return (
      <section className='text-white-300'>
        <section className='mb-10'>

          <h1>Rosseau's Coffe</h1>
          <span>Welcome!</span>
        </section>

      <section className=''>

        <Reviews/>
      </section>

      </section>
  )
}

export default HomePage