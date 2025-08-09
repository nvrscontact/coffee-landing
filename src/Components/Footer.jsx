import {Link} from 'react-router-dom'

import instagramWhite from '../assets/instagramWhite.svg'
import arrow_down from '../assets/arrow_down.svg'
import facebookWhite from '../assets/facebookWhite.svg'
import Subtitle_Footer from './SubComponents/Subtitle_Footer'

function Footer() {
  const date = new Date().getFullYear()


      
  return (
    <>
      <footer className='flex flex-col w-full bg-[#7d550fea] text-white/70 text-[10px] mt-20 '>

        <ul className='flex gap-3 items-center pl-6 pt-6'>
          <li><a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a></li>
          <li><a href="https://facebook.com"><img src={facebookWhite} alt="" className='h-5' /></a></li>
          <li><a href="https://facebook.com"><img src={instagramWhite} alt="" className='h-5' /></a></li>
        </ul>

        <section className='flex flex-col text-white/60 my-2 gap-3 w-full p-6 text-[14px] inter-300'>
          <Subtitle_Footer 
          title={'Contact'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
          urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}/>
          <Subtitle_Footer 
          title={'Information'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
          urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}/>
          <Subtitle_Footer 
          title={'Legal'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
          urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}/>
          <Subtitle_Footer 
          title={'Cookies'} subtitleOne={'Hotel'} subtitleTwo={'Resort'} subtitleThree={'Restaurant'}
          urlOne={'/hotel'} urlTwo={'/resort'} urlThree={'/restaurant'}/>
        </section>

      <p className='pl-6 pb-6 space-y-1 flex flex-col inter-200'>
        <span>Valencia, Spain - 03803</span>
        <span>© Rosetti's Hotel {date} - All Rights Reserved</span>
      </p>
   
      <p className='flex gap-6 pl-6 inter-200 bg-black/80 w-full py-3 text-[10px] '> 
        <Link to='/privacy'>Cookies Policy</Link>
        <Link to='/privacy'>Terms of Use</Link>
        <Link to='/privacy'>Privacy Policy</Link>
      </p>
      

      </footer>

    </>
  )
}

export default Footer