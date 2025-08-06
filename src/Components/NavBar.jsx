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
      
      <div className='bg-black/90 inter-300 '>

        <section className=' flex justify-between items-center relative h-[50px] text-white'>

          <details className='list-none pl-4'>
            <summary className='list-none'><img src={Hamburger_Menu} alt="" className='h-8' /></summary>
            <section className='absolute left-0 z-3 top-12 bg-black/50 backdrop-blur-xl w-full h-52 p-6'>

                <li>
                  <ul>Hola</ul>
                  <ul>Hola</ul>
                </li>
            </section>
          </details>
        </section>

      </div>



    </>
  )
}

export default NavBar

/* 66460fe1 */