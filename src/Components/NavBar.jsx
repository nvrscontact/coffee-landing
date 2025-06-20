import React from 'react'
import {Link} from 'react-router-dom'

import Home from '../assets/home.svg'
import Languages from '../assets/languages.svg'
import Sun from '../assets/sun.svg'

function NavBar() {


  return (
    <>
      
      <div className='bg-white/10 fira-sans-light my-3 '>

        <section className='mx-5 flex justify-between items-center py-2'>
          <Link to='/'><img src={Home} alt="" className='h-4' /></Link>
          <section className='flex justify-center items-center gap-2 text-[12px] text-white/60'>
              <span className='p-[6px] '><Link to='/'>Reservations</Link> </span>
              <span className=' p-[6px]'><Link to='/menus'>Menus</Link> </span>
              <span className=' p-[6px]'><Link to='/menus'>Gallery</Link> </span>
              <span className=' p-[6px]'><Link to='/menus'>Delivery</Link> </span>
          </section>
          <section className='flex gap-3'>
            <Link to='/'><img src={Languages} alt="" className='h-4' /></Link>
            <img src={Sun} alt="" className='h-4' />
          </section>
        </section>

      </div>

    </>
  )
}

export default NavBar