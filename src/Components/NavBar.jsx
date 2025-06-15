import React from 'react'
import {Link} from 'react-router-dom'

import Home from '../assets/home.svg'
import Languages from '../assets/languages.svg'
import Sun from '../assets/sun.svg'

function NavBar() {
  return (
    <>
    <section className='flex items-center justify-between mx-5 fira-sans-light  my-8 pb-4 '>
      <section className=''>
      <Link to='/'><img src={Home} alt="" className='h-4' /></Link>
      </section>
        <section className='flex justify-center items-center gap-3 text-[12px] text-white/80'>
            <span className='bg-white/10 p-[6px] rounded-[6px] '><Link to='/menus'>Menus</Link> </span>
            <span className='bg-white/10 p-[6px] rounded-[6px]'><Link to='/menus'>Reservations</Link> </span>
            <span className='bg-white/10 p-[6px] rounded-[6px]'><Link to='/menus'>Menus</Link> </span>
            <span className='bg-white/10 p-[6px] rounded-[6px]'><Link to='/menus'>More</Link> </span>
        </section>
       <section className='flex gap-3'>
      <Link to='/'><img src={Languages} alt="" className='h-4' /></Link>
      <img src={Sun} alt="" className='h-4' />
      </section>
    </section>
    </>
  )
}

export default NavBar