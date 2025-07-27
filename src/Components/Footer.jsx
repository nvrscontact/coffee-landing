import {Link} from 'react-router-dom'

import apple_pay from '../assets/apple_pay.svg'
import american_express_pay from '../assets/american_express_pay.svg'
import paypal_pay from '../assets/paypal_pay.svg'
import visa_pay from '../assets/visa_pay.svg'
import mastercard_pay from '../assets/mastercard_pay.svg'

import instagramWhite from '../assets/instagramWhite.svg'
import facebookWhite from '../assets/facebookWhite.svg'

function NavBar() {
      const date = new Date().getFullYear()

      
  return (
    <>
    <section className='bg-[#7a520dd0] flex text-[10px]'>
      <div className='flex flex-col gap-5 m-6 w-full'>

        <li className='flex gap-3 items-center'>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
            <a href="https://facebook.com"><img src={facebookWhite} alt="" className='h-5 ' /></a>
        </li>

        <section className='flex gap-10 border-y border-white/40 pt-6 pb-8'>

          <div className='flex flex-col gap-3 text-white/70 inter-200'>
              <h2 className='text-white/80 text-[12px] mb-1'>Company</h2>
              <a className='hover-white'>Contact</a>
              <Link to='/about_us ' className='hover-white'>About Us</Link>
              <Link to='/work_with_us' className='hover-white'>Work with Us</Link>
              <Link to='/work_with_us' className='hover-white'>Events</Link>
          </div>
          <div className='flex flex-col gap-3 text-white/70 inter-200'>
              <h2 className='text-white/80 text-[12px] mb-1'>Information</h2>
              <Link to='/help_privacy' className='hover-white'>Help & Support</Link>
              <Link to='/help_privacy' className='hover-white'>Privacy & Cookies</Link>
          </div>
   
        </section>
      
        <span className='flex inter-200 text-white/50 '>© Rosetti's Hotel {date} <br /> All Rights Reserved </span>


      </div>
    </section>
    </>
  )
}

export default NavBar