import React from 'react'

function NavBar() {
      const date = new Date().getFullYear()
  return (
    <>
    <div className='flex flex-col gap-8 text-[13px] border-t border-white/30 fira-sans-extralight'>
      <section className='ml-5 my-6'>

        <section className='flex mb-7'>
            <li className='flex gap-3 items-center'>
                <a href="https://facebook.com"><img src="/images/instagram.svg" alt="" className='h-5' /></a>
                <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt="" className='h-4' /></a>
                <a href="https://facebook.com"><img src="/images/x.svg" alt="" className='h-5' /></a>
            </li>
        </section>

        <section className='flex flex-col gap-3 mb-7 text-white/50 '>
            <a className='hover-white' href='https://www.apple.com'>Contact</a>
            <a className='hover-white' href='https://www.apple.com'>About Us</a>
            <a className='hover-white' href='https://www.apple.com'>Work with us</a>
            <a className='hover-white' href='https://www.apple.com'>Help & Support</a>
            <a className='hover-white' href='https://www.apple.com'>Privacy & Cookies</a>
        </section>
        <span className='flex flex-col text-white/30  text-[12px] '>Ruseau's Coffe © {date}
          <span className='colrs'>All rights reserved.</span>
        </span>
      
      </section>
    </div>
    </>
  )
}

export default NavBar