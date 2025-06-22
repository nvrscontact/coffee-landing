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
      
      <div className='bg-white/10 fira-sans-light mb-4 '>

        <section className='mx-5 flex justify-between items-center py-[10px] relative'>
          <button onClick={toggleMenu}><img src={Hamburger} alt="" className='h-6' /></button>
          
          <div ref={menuRef} style={{display: 'none', position: 'absolute', top: '35px', left: '5px' }}>
            <ul className=''>
              <li className='flex flex-col text-white backdrop-blur-md bg-white/10 text-[11px] p-1 rounded-xl '>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/reservations'>Reservations</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/menus'>Menus & Schedule</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/gallery'>Gallery</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/faqs'>Faqs</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Home</Link> </span>
              </li>
            </ul>
          </div>
        
          <section className='flex gap-4 items-center'>
           <Link to='/'><img src={Home} alt="" className='h-[16px] ' /></Link>
            <Link to='/'><img src={Languages} alt="" className='h-[16px]' /></Link>
            <img src={Sun} alt="" className='h-[16px] ' />
          </section>
        </section>

      </div>

    </>
  )
}

export default NavBar