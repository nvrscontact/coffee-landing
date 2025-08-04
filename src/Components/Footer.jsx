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
      <div className='flex flex-col w-full justify-end items-center bg-[#7a520dd0] text-[10px] '>

        <li className='flex gap-3 items-center p-6'>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
            <a href="https://facebook.com"><img src={facebookWhite} alt="" className='h-5 ' /></a>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
            <a href="https://facebook.com"><img src={facebookWhite} alt="" className='h-5 ' /></a>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
        </li>

        <section className='flex flex-col px-6 gap-3 w-full mb-5'>

          <details className='w-full text-white/80 text-[14px] inter-300 '>
            <summary className='list-none mb-2 flex items-center gap-5'>Contact <span className='border border-white/30 w-full h-[1px] '></span></summary>
            <p className='text-[10px] flex flex-col gap-1 '>
              <span>Whatsapp</span>
              <span>Whatsapp</span>
            </p>
          </details>
          <details className='w-full text-white/80 text-[14px] inter-300 '>
            <summary className='list-none mb-2 flex items-center gap-5'>Information <span className='border border-white/30 w-full h-[1px] '></span></summary>
            <p className='text-[10px] flex flex-col gap-1 '>
              <span>Whatsapp</span>
              <span>Whatsapp</span>
            </p>
          </details>
          <details className='w-full text-white/80 text-[14px] inter-300 '>
            <summary className='list-none mb-2 flex items-center gap-5'>Information <span className='border border-white/30 w-full h-[1px] '></span></summary>
            <p className='text-[10px] flex flex-col gap-1 '>
              <span>Whatsapp</span>
              <span>Whatsapp</span>
            </p>
          </details>
          <details className='w-full text-white/80 text-[14px] inter-300 '>
            <summary className='list-none mb-2 flex items-center gap-5'>Information <span className='border border-white/30 w-full h-[1px] '></span></summary>
            <p className='text-[10px] flex flex-col gap-1 '>
              <span>Whatsapp</span>
              <span>Whatsapp</span>
            </p>
          </details>

        </section>

        

      <span className='flex text-white/70 text-center inter-200 mb-3'>© Rosetti's Hotel {date} - All Rights Reserved</span>
       <span className='flex items-center justify-center text-white/70 inter-200 bg-black/80 w-full py-3 text-[10px] '>Privacy Policy - Terms of use - Cookies Policy</span>
      

      </div>

{/* 
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
          </div> */}

    </>
  )
}

export default NavBar