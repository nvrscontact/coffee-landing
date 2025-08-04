import React from 'react'
import resort_hotel from '../assets/resort_hotel.jpg'
import Novalty from './SubComponents/Novalty'

function Resort() {
  return (
        <>
        <Novalty img={resort_hotel} title={'Resort'} />
    </>
  )
}

export default Resort