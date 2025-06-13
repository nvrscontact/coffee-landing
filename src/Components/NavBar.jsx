import React from 'react'
import {Link} from 'react-router-dom'

import Home from '../assets/home.svg'
import Languages from '../assets/languages.svg'
import Sun from '../assets/sun.svg'

function NavBar() {
  return (
    <>
    <section className='flex items-center justify-between mx-5 cormorant-400 '>
      <section className=''>
      <Link to='/'><img src={Home} alt="" className='h-4' /></Link>
      </section>
        <section className='flex justify-center gap-5 my-8 text-[14px] text-white/80'>
            <Link to='/menus'>Menus</Link>
            <Link to='/quotes'>Reservations</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/gallery'>Store</Link>
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