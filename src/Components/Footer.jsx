import React from 'react'
import apple_pay from '../assets/apple_pay.svg'
import american_express_pay from '../assets/american_express_pay.svg'
import paypal_pay from '../assets/paypal_pay.svg'
import visa_pay from '../assets/visa_pay.svg'
import mastercard_pay from '../assets/mastercard_pay.svg'

function NavBar() {
      const date = new Date().getFullYear()
  return (
    <>
    <section className='flex flex-col gap-8 text-[13px] border-t border-white/30 fira-sans-extralight'>
      <div className='flex flex-col gap-6 ml-5 my-6'>

        <section className='flex'>
            <li className='flex gap-3 items-center'>
                <a href="https://facebook.com"><img src="/images/instagram.svg" alt="" className='h-5' /></a>
                <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt="" className='h-4' /></a>
                <a href="https://facebook.com"><img src="/images/x.svg" alt="" className='h-5' /></a>
            </li>
        </section>

        <section className='flex flex-col gap-3 text-white/50 '>
            <a className='hover-white' href='https://www.apple.com'>Contact</a>
            <a className='hover-white' href='https://www.apple.com'>About Us</a>
            <a className='hover-white' href='https://www.apple.com'>Work with us</a>
            <a className='hover-white' href='https://www.apple.com'>Help & Support</a>
            <a className='hover-white' href='https://www.apple.com'>Privacy & Cookies</a>
        </section>
        
        <span className='flex flex-col text-white/30  text-[12px] '>Ruseau's Coffe © {date}
          <span className='colrs'>All rights reserved.</span>
        </span>

        <section className='flex gap-3'>
          <img src={apple_pay} alt="" className='h-6' />
          <img src={american_express_pay} alt="" className='h-6' />
          <img src={paypal_pay} alt="" className='h-6' />
          <img src={mastercard_pay} alt="" className='h-6' />
          <img src={visa_pay} alt="" className='h-6' />
       
        </section>
      
      </div>
    </section>
    </>
  )
}

export default NavBar