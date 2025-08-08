import {Link} from 'react-router-dom'
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
            <section className='absolute left-0 z-3 top-12 bg-black/50 backdrop-blur-md w-64 h-[39rem] p-6 flex flex-col justify-between'>

                <ul className='text-white/70 space-y-8 w-full [&>*>*]:flex '>
                  <li><Link to='/hotel'>Hotel</Link></li>
                  <li><Link to='/resort'>Resort</Link></li>
                  <li><Link to='/restaurant'>Restaurant</Link> </li>
                  <li><Link to='/faq'>Faq</Link> </li>
                  <li><Link to='/faq'>Information</Link> </li>
                  <li><Link to='/' className=''>Home</Link> </li>
                </ul>

                <section className='space-y-2'>
                  <div className='flex flex-col gap-1'>
                    <button className='bg-white/10 py-2'><Link to='/register'>Register</Link></button>
                    <button className='bg-white/10 py-2'><Link to='/login'>Login</Link></button>
                  </div>
                <p className='text-white/70 text-[10px] '>If you need more info visit <Link to='/support' className='border-b border-white/40'>Support</Link> </p>
                </section>


            </section>
          </details>
          
        </section>

      </div>



    </>
  )
}

export default NavBar

/* 66460fe1 */