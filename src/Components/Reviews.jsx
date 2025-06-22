import React from 'react'
import OneReviews from './One_Reviews'


function Reviews() {
  return (
   <div className='mx-5'>
          <h1 className='text-white/50 text-[20px] fira-sans-extralight border-b border-white/30 pb-3'>What some people say...</h1>
          <section className='flex flex-col gap-4 mt-6 mb-12'>
            <OneReviews names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
            <OneReviews names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
            <OneReviews names='Jennifer' dates='April 2023' paragraph='Its unique.' />
          </section>
    </div>
  )
}

export default Reviews