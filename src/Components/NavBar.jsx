import {Link} from 'react-router-dom'

import Home from '../assets/home.svg'
import Languages from '../assets/languages.svg'
import Sun from '../assets/sun.svg'
import Hamburger from '../assets/hamburger.svg'

import React, {useRef} from 'react'

function NavBar() {

  const menuRef = useRef()

  const toggleMenu = () => {
    const menu = menuRef.current;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  };

  const closeMenu = () => {
    menuRef.current.style.display = 'none';
  };


  return (
    <>
      
      <div className='bg-white/10 fira-sans-light my-3 '>

        <section className='mx-5 flex justify-between items-center py-2 relative'>
          <button onClick={toggleMenu}><img src={Hamburger} alt="" className='h-5' /></button>
          <div ref={menuRef} style={{display: 'none', position: 'absolute', top: '30px' }}>
            <ul className=''>
              <li className='flex flex-col bg-white text-black text-[9px] '>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Reservations</Link> </span>
              <span className=' p-[6px]' onClick={closeMenu}><Link to='/menus'>Menus</Link> </span>
              <span className=' p-[6px]' onClick={closeMenu}><Link to='/menus'>Gallery</Link> </span>
              <span className=' p-[6px]' onClick={closeMenu}><Link to='/menus'>Delivery</Link> </span>
              </li>
            </ul>
          </div>
        
          <section className='flex gap-3'>
           <Link to='/'><img src={Home} alt="" className='h-4' /></Link>
            <Link to='/'><img src={Languages} alt="" className='h-4' /></Link>
            <img src={Sun} alt="" className='h-4' />
          </section>
        </section>

      </div>

    </>
  )
}

export default NavBar