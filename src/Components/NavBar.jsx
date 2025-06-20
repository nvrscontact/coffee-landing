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

  const timezone = new Date();
  const hora = timezone.getHours()
  
  let message;

  if (hora >= 7 && hora <= 23){
    message = `Openning `;
  }else{
    message = `Now Closed`;
  }
  console.log(message)


  return (
    <>
      
      <div className='bg-white/10 fira-sans-light my-4 '>

        <section className='mx-5 flex justify-between items-center py-2 relative'>
          <button onClick={toggleMenu}><img src={Hamburger} alt="" className='h-6' /></button>
          
          <div ref={menuRef} style={{display: 'none', position: 'absolute', top: '35px', left: '5px' }}>
            <ul className=''>
              <li className='flex flex-col text-white backdrop-blur-md bg-white/10 text-[11px] p-1 '>
              <span className=' p-[6px]' onClick={closeMenu}><Link to='/menus'>Reservations</Link> </span>
              <span className=' p-[6px]' onClick={closeMenu}><Link to='/menus'>Menus & Schedule</Link> </span>
              <span className=' p-[6px]' onClick={closeMenu}><Link to='/menus'>Gallery</Link> </span>
              <span className='p-[6px] border w-full' onClick={closeMenu}><Link to='/'>Home</Link> </span>
              </li>
            </ul>
          </div>
        
          <section className='flex gap-4 items-center'>
           <Link to='/'><img src={Home} alt="" className='h-4' /></Link>
            <Link to='/'><img src={Languages} alt="" className='h-4' /></Link>
            <img src={Sun} alt="" className='h-4 ' />
          </section>
        </section>

      </div>

    </>
  )
}

export default NavBar