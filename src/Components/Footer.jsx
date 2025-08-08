import {Link} from 'react-router-dom'

import apple_pay from '../assets/apple_pay.svg'
import american_express_pay from '../assets/american_express_pay.svg'
import paypal_pay from '../assets/paypal_pay.svg'
import visa_pay from '../assets/visa_pay.svg'
import mastercard_pay from '../assets/mastercard_pay.svg'

import instagramWhite from '../assets/instagramWhite.svg'
import arrow_down from '../assets/arrow_down.svg'
import facebookWhite from '../assets/facebookWhite.svg'

function NavBar() {
      const date = new Date().getFullYear()

      
  return (
    <>
      <footer className='flex flex-col w-full bg-[#7a520dd0] text-[10px] '>

        <li className='flex gap-3 items-center pl-6 pt-6'>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
            <a href="https://facebook.com"><img src={facebookWhite} alt="" className='h-5 ' /></a>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
        </li>

        <section className='flex flex-col my-2 gap-3 w-full p-6 text-white/60 text-[14px] inter-300'>

          <details className='w-full '>
            <summary className='list-none mb-2 flex justify-between items-center gap-5'>Contact <img src={arrow_down} alt="" className='h-4' /></summary>
            <li className='text-[13px] flex flex-col gap-3 text-white/50 pl-3 mb-4 pt-2 '>
                    <ul className='hover:bg-white/10'><Link to='/hotel'>Hotel</Link> </ul>
                    <ul><Link to='/resort'>Resort</Link> </ul>
                    <ul><Link to='/restaurant'>Restaurant</Link> </ul>
            </li>
          </details>
          <details className='w-full '>
            <summary className='list-none mb-2 flex justify-between items-center gap-5'>Information <img src={arrow_down} alt="" className='h-4' /></summary>
            <li className='text-[13px] flex flex-col gap-3 text-white/50 pl-3 mb-4 pt-2 '>
                    <ul><Link to='/hotel'>Hotel</Link> </ul>
                    <ul><Link to='/resort'>Resort</Link> </ul>
                    <ul><Link to='/restaurant'>Restaurant</Link> </ul>
            </li>
          </details>
          <details className='w-full '>
            <summary className='list-none mb-2 flex justify-between items-center gap-5'>Legal <img src={arrow_down} alt="" className='h-4' /></summary>
           <li className='text-[13px] flex flex-col gap-3 text-white/50 pl-3 mb-4 pt-2 '>
                    <ul><Link to='/hotel'>Hotel</Link> </ul>
                    <ul><Link to='/resort'>Resort</Link> </ul>
                    <ul><Link to='/restaurant'>Restaurant</Link> </ul>
            </li>
          </details>
          <details className='w-full '>
            <summary className='list-none mb-2 flex justify-between items-center gap-5'>Hotel <img src={arrow_down} alt="" className='h-4' /></summary>
           <li className='text-[13px] flex flex-col gap-3 text-white/50 pl-3 mb-4 pt-2 '>
                    <ul><Link to='/hotel'>Hotel</Link> </ul>
                    <ul><Link to='/resort'>Resort</Link> </ul>
                    <ul><Link to='/restaurant'>Restaurant</Link> </ul>
            </li>
          </details>
          <details className='w-full '>
            <summary className='list-none mb-2 flex justify-between items-center gap-5'>Resort <img src={arrow_down} alt="" className='h-4' /></summary>
           <li className='text-[13px] flex flex-col gap-3 text-white/50 pl-3 mb-4 pt-2 '>
                    <ul><Link to='/hotel'>Hotel</Link> </ul>
                    <ul><Link to='/resort'>Resort</Link> </ul>
                    <ul><Link to='/restaurant'>Restaurant</Link> </ul>
            </li>
          </details>
          <details className='w-full '>
            <summary className='list-none mb-2 flex justify-between items-center gap-5'>Restaurant <img src={arrow_down} alt="" className='h-4' /></summary>
           <li className='text-[13px] flex flex-col gap-3 text-white/50 pl-3 mb-4 pt-2 '>
                    <ul><Link to='/hotel'>Hotel</Link> </ul>
                    <ul><Link to='/resort'>Resort</Link> </ul>
                    <ul><Link to='/restaurant'>Restaurant</Link> </ul>
            </li>
          </details>

        </section>

        <article className='pl-6 pb-6 space-y-1 text-white/50'>
          <span className='flex text-center inter-200 '>Valencia, Spain - 03803</span>
          <span className='flex text-center inter-200'>© Rosetti's Hotel {date} - All Rights Reserved</span>
        </article>
      <span className='flex items-center justify-center text-white/70 inter-200 bg-black/80 w-full py-3 text-[10px] '>Privacy Policy - Terms of use - Cookies Policy</span>
      

      </footer>

    </>
  )
}

export default NavBar