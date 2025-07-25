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
      <div className='mb-20 flex flex-col'>
        
              <section className='flex flex-col fira-sans-extralight my-32'>
              <h1 className='animated_white text-4xl inter-200 text-center'>Restaurant</h1>
               {/*  <h1 className='text-center text-[20px] pb-1 animated_white '>Our three most sold dishes</h1>
                <section className='flex items-center justify-center gap-2 text-[10px] text-white/50 '>
                  <span className='first-btn'><img src={Heart} className='h-3' alt="" /> Most requested.</span>
                  <span className='first-btn'><img src={Discount} className='h-4' alt="" /> 20% Dto.</span>
                  <span className='first-btn'><img src={Delivery} className='h-4' alt="" /> Free delivery from 25 € </span>
                </section> */}
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