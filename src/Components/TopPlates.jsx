import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'

import Discount from '../assets/discount.svg'
import Heart from '../assets/heart.svg'
import Delivery from '../assets/delivery.svg'

function TopPlates() {
  return (
    <>
      <div className='mb-20 mx-5 flex flex-col'>
              
              <section className='flex flex-col fira-sans-extralight mt-12 mb-14'>
                <h1 className='text-start text-[20px] text-white/50 pb-1 '>Our three most sold dishes...</h1>
                <section className='flex items-center gap-2 text-[10px] border-b pb-3 border-white/20 text-white/50 '>
                  <span className='first-btn'><img src={Discount} className='h-4' alt="" /> 20% Dto.</span>
                  <span className='first-btn'><img src={Heart} className='h-3' alt="" /> Most requested.</span>
                  <span className='first-btn'><img src={Delivery} className='h-4' alt="" /> Free delivery from 25 € </span>
                </section>
              </section>
      
              <section className='mb-12'>
                <h1 className='text-[#9e763b]'>The Plate Imaginatel</h1>
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
                <section className='w-52'>
                  <img src={Grid_Coffe_One} alt="" className='h-80' />
                    <div className='flex mt-3 text-[13px] gap-2 text-center '>
                    <span className='second-btn'>Order</span>
                    <span className='second-btn'>Reserve</span>
                    <span className='second-btn'>FAQ</span>
                  
                  </div>
                </section>
              </section>
      
              <section className='flex flex-col items-end mb-12'>
                <h1 className='text-[#9e763b]'>The Plate Imaginatel</h1>
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
                <section className='w-52'>
                  <img src={Grid_Coffe_One} alt="" className='h-80' />
                   <div className='flex mt-3 text-[13px] gap-2 text-center '>
                    <span className='second-btn '>Order</span>
                    <span className='second-btn'>Reserve</span>
                    <span className='second-btn'>FAQ</span>
                  
                  </div>
                </section>
              </section>
      
              <section className=''>
                <h1 className='text-[#9e763b]'>The Plate Imaginatel</h1>
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
                <section className='w-52'>
                  <img src={Grid_Coffe_One} alt="" className='h-80' />
                  <div className='flex mt-3 text-[13px] gap-2 text-center [&>*]:basis-sm'>
                    <span className='second-btn'>Order</span>
                    <span className='second-btn'>Reserve</span>
                    <span className='second-btn '>FAQ</span>
                  
                  </div>
                </section>
              </section>
            </div>
    </>
  )
}

export default TopPlates