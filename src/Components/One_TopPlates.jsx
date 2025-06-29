import React from 'react'
import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'
import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'

function One_TopPlates() {
  return (
        <section className='w-fit'>
            <h1 className='text-[#9e763b]'>The Plate Imaginatel</h1>
            <section className='flex flex-col gap-2 text-[9px] mb-2 '>
                <section className='flex gap-1 items-center'>
                    <div className='flex'>
                    <img src={Star} alt="" className='h-4' />
                    <img src={Star} alt="" className='h-4' />
                    <img src={Star} alt="" className='h-4' />
                    <img src={Star_Out} alt="" className='h-4' />
                    <img src={Star_Out} alt="" className='h-4' />
                    </div>
                    <span className='text-white/40'>+3 opinion</span>
                </section>
                
                <section className='flex gap-2'>
                <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>+13 reviews</span>
                <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
                <span className='p-[3px] bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
                </section>
            </section>
            <p className='text-[9px] max-w-52 text-white/50 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet facere.</p>
            <section className='w-52'>
                <img src={Grid_Coffe_One} alt="" className='h-80 mb-4 rounded-lg' />
                <div className='flex text-[12px] gap-1 text-center '>
                <span className='second-btn'>Faqs</span>
                <span className='second-btn'>Reserve</span>
                
                </div>
            </section>
        </section>
  )
}

export default One_TopPlates