import Grid_Coffe_One from '../assets/grid_coffee_one.jpg'
import Star from '../assets/star.svg'
import Star_Out from '../assets/star-out.svg'

import Discount from '../assets/discount.svg'
import Heart from '../assets/heart.svg'
import Delivery from '../assets/delivery.svg'
import One_TopPlates from './One_TopPlates'

function TopPlates() {
  return (
    <>
      <div className='mb-20 mx-5 flex flex-col'>
              
              <section className='flex flex-col fira-sans-extralight mt-12 mb-14'>
                <h1 className='text-start text-[20px] text-white/50 pb-1 '>Our three <span className='animated_white '>most sold</span> dishes...</h1>
                <section className='flex items-center gap-2 text-[10px] border-b pb-3 border-white/20 text-white/50 '>
                  <span className='first-btn'><img src={Discount} className='h-4' alt="" /> 20% Dto.</span>
                  <span className='first-btn'><img src={Heart} className='h-3' alt="" /> Most requested.</span>
                  <span className='first-btn'><img src={Delivery} className='h-4' alt="" /> Free delivery from 25 € </span>
                </section>
              </section>
      
          <section className='flex flex-col items-center gap-32'>
              <One_TopPlates/>
      
              <One_TopPlates/>
      
              <One_TopPlates/>
          </section>
              
       </div>
    </>
  )
}

export default TopPlates