import React from 'react'
import {Link} from 'react-router-dom'

import Hola from '../assets/homes.svg'

function NavBar() {
  return (
    <>
    <section className='flex items-center justify-between mx-5'>
      <section className='}'>
      <Link to='/'><img src={Hola} alt="" className='h-5' /></Link>
      </section>
        <section className='flex justify-center gap-3 my-8 text-[11px]'>
            <Link to='/menus'>Menus</Link>
            <Link to='/quotes'>Reservations</Link>
            <Link to='/gallery'>Gallery</Link>
        </section>
       <section className='}'>
      <Link to='/'><img src={Hola} alt="" className='h-5' /></Link>
      </section>
    </section>
    </>
  )
}

export default NavBar