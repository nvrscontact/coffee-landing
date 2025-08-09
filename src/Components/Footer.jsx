import {Link} from 'react-router-dom'

import instagramWhite from '../assets/instagramWhite.svg'
import arrow_down from '../assets/arrow_down.svg'
import facebookWhite from '../assets/facebookWhite.svg'
import Subtitle_Footer from './SubComponents/Subtitle_Footer'

function NavBar() {
  const date = new Date().getFullYear()

  const menuSections = [
    {titulo: 'Contact', links: ['/hotel'] }

  ]

      
  return (
    <>
      <footer className='flex flex-col w-full bg-[#835b16ea] text-[10px] '>

        <li className='flex gap-3 items-center pl-6 pt-6'>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
            <a href="https://facebook.com"><img src={facebookWhite} alt="" className='h-5 ' /></a>
            <a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a>
        </li>

        <section className='flex flex-col my-2 gap-3 w-full p-6 text-white/60 text-[14px] inter-300'>

        <Subtitle_Footer 
        title={'Contact'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
        urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}
        />
        <Subtitle_Footer 
        title={'Information'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
        urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}
        />
        <Subtitle_Footer 
        title={'Legal'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
        urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}
        />
        <Subtitle_Footer 
        title={'Cookies'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
        urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}
        />
       

        </section>

        <article className='pl-6 pb-6 space-y-1 text-white/50'>
          <span className='flex text-center inter-200 '>Valencia, Spain - 03803</span>
          <span className='flex text-center inter-200'>© Rosetti's Hotel {date} - All Rights Reserved</span>
        </article>
      <span className='flex items-center justify-center text-white/70 inter-200 bg-black/80 w-full py-3 text-[10px] '>Privacy Policy - Terms of use - Cookies Policy</span>
      

      </footer>

    </>
  )
}

export default NavBar