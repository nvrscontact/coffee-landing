import {Link} from 'react-router-dom'

import Home from '../assets/home.svg'
import Sun from '../assets/sun.svg'
import Hamburger_Menu from '../assets/hamburger_menu.svg'

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
      
      <div className='bg-[#6b4c17] inter-300 mb-4 border-b border-black/30 '>

        <section className='mx-5 flex justify-between items-center relative h-[50px]'>
          <button onClick={toggleMenu}><img src={Hamburger_Menu} alt="" className='h-6' /></button>
          
          <div ref={menuRef} style={{display: 'none', position: 'absolute', top: '35px', left: '5px' }}>
            <ul className='border border-white/30 rounded-[16px] '>
              <li className='flex flex-col text-white/60 backdrop-blur-md bg-white/10 text-[11px] p-2 m-1 rounded-xl '>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/reservations'>Reservations</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/menus'>Menus & Faqs</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/gallery'>Gallery</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/help_privacy'>Help & Privacy</Link> </span>
              <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Home</Link> </span>
              </li>
            </ul>
          </div>
        
          <section className='flex gap-4 items-center'>
           <Link to='/'><img src={Home} alt="" className='h-4 ' /></Link>
            <img src={Sun} alt="" className='h-4 ' />
          </section>
        </section>

      </div>

    </>
  )
}

export default NavBar