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
    <section className='flex flex-col text-[12px] border-t border-white/20 fira-sans-extralight'>
      <div className='flex flex-col gap-6 ml-5 mt-6 mb-3'>

        <section className='flex'>
            <li className='flex gap-3 items-center'>
                <a href="https://facebook.com"><img src={instagram_icon} alt="" className='h-4' /></a>
                <a href="https://facebook.com"><img src={tiktok_icon} alt="" className='h-4 ' /></a>
                <a href="https://facebook.com"><img src={twitter_icon} alt="" className='h-4' /></a>
            </li>
        </section>

        <section className='flex flex-col gap-3 text-white/50'>
            <a className='hover-white'>Contact</a>
            <Link to='/about_us ' className='hover-white'>About Us</Link>
            <Link to='/work_with_us' className='hover-white'>Work with Us</Link>
            <Link to='/help_privacy' className='hover-white'>Help & Support</Link>
            <Link to='/help_privacy' className='hover-white'>Privacy & Cookies</Link>
        </section>
        

        <section className='flex gap-3'>
          <img src={apple_pay} alt="" className='h-7' />
          <img src={american_express_pay} alt="" className='h-7' />
          <img src={paypal_pay} alt="" className='h-7' />
          <img src={mastercard_pay} alt="" className='h-7' />
          <img src={visa_pay} alt="" className='h-7' />
        </section>
      
        <span className='flex flex-col text-white/30  text-[12px] '>Rosetti's Coffe © {date}
          <span className='colrs'>All rights reserved.</span>
        </span>


      </div>
    </section>
    </>
  )
}

export default NavBar