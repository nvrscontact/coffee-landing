import {Link} from 'react-router-dom'

import apple_pay from '../assets/apple_pay.svg'
import american_express_pay from '../assets/american_express_pay.svg'
import paypal_pay from '../assets/paypal_pay.svg'
import visa_pay from '../assets/visa_pay.svg'
import mastercard_pay from '../assets/mastercard_pay.svg'

import instagram_icon from '../assets/instagram_icon.svg'
import twitter_icon from '../assets/twitter_icon.svg'
import tiktok_icon from '../assets/tiktok_icon.svg'

function NavBar() {
      const date = new Date().getFullYear()
  return (
    <>
    <section className='bg-[#6b4c17] flex text-[12px]'>
      <div className='flex flex-col gap-10 m-6 '>

        <section className='flex'>
            <li className='flex gap-3 items-center'>
                <a href="https://facebook.com"><img src={instagram_icon} alt="" className='h-5' /></a>
                <a href="https://facebook.com"><img src={tiktok_icon} alt="" className='h-[18px] ' /></a>
                <a href="https://facebook.com"><img src={twitter_icon} alt="" className='h-5' /></a>
            </li>
        </section>

        <section className='flex gap-10'>

          <section className='flex flex-col gap-3 text-white/70 inter-200'>
              <h2 className='text-white text-[14px] mb-1'>Company</h2>
              <a className='hover-white'>Contact</a>
              <Link to='/about_us ' className='hover-white'>About Us</Link>
              <Link to='/work_with_us' className='hover-white'>Work with Us</Link>
              <Link to='/work_with_us' className='hover-white'>Events</Link>
          </section>
          <section className='flex flex-col gap-3 text-white/70 inter-200'>
              <h2 className='text-white text-[14px] mb-1'>Information</h2>
              <Link to='/help_privacy' className='hover-white'>Help & Support</Link>
              <Link to='/help_privacy' className='hover-white'>Privacy & Cookies</Link>
          </section>
   
        </section>
      
        <span className='flex inter-200 text-white/50 text-[12px] '>© Rosetti's Coffe {date} - All Rights Reserved </span>


      </div>
    </section>
    </>
  )
}

export default NavBar