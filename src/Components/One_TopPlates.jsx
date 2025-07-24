import React from 'react'
import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'
import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Buy from '../assets/buy.svg'

function One_TopPlates() {
  return (
        <section className='inter-300 w-full flex flex-col justify-center items-center '>
            <h1 className='text-[#9e763b] text-[20px] inter-300'>The Plate Imaginatel</h1>
            <section className='flex flex-col gap-2 text-[10px] mb-2 '>
                <section className='flex gap-1 items-center justify-center'>
                    <div className='flex'>
                    <img src={Star} alt="" className='h-4' />
                    <img src={Star} alt="" className='h-4' />
                    <img src={Star} alt="" className='h-4' />
                    <img src={Star_Out} alt="" className='h-4' />
                    <img src={Star_Out} alt="" className='h-4' />
                    </div>
                    <span className='text-white/40 '>+3 opinion</span>
                </section>
                
                <section className='flex gap-2 inter-300'>
                <span className='p-1 bg-white/10 text-white/70 rounded-[6px] '>+13 reviews</span>
                <span className='p-1 bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
                <span className='p-1 bg-white/10 text-white/70 rounded-[6px] '>Sweet Taste</span>                      
                </section>
            </section>
            <p className='text-[9px] max-w-60 text-white/50 text-center mt-1 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fuga earum asperiores modi, eveniet quas, sed facilis nihil officia repellat est amet facere.</p>
            <section className='text-white/60 '>
                <img src={Grid_Coffe_One} alt="" className='h-80 mb-4 rounded-lg' />
                <div className='flex justify-center text-[12px] gap-3 '>
                    <section className='flex flex-col items-center'>
                       <span className='text-[12px] bg-white/10 py-2 px-3 rounded-md '>Place Order</span>
                       <span className='border w-16 mt-[6px] border-white/10 rounded-md'></span>
                    </section>
                    <section className='flex flex-col items-center'>
                       <span className='text-[12px] bg-white/10 py-2 px-3 rounded-md '>View more</span>
                       <span className='border w-16 mt-[6px] border-white/10 rounded-md'></span>
                    </section>              
                </div>
            </section>
        </section>
  )
}

export default One_TopPlates