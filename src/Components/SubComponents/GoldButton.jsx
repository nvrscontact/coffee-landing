import React from 'react'
import parkingWhite from '../../assets/parkingWhite.svg'

function GoldButton() {
  return (
    <>
    <p className='relative overflow-auto bg-[#a37615] flex items-center gap-[2px] py-[6px] px-3  rounded-md'>
    <img src={parkingWhite} alt="" className='h-3' />
    <span className='blour text-[10px] inter-300 text-white blour '>Parking</span>
    </p>
    </>
  )
}

export default GoldButton