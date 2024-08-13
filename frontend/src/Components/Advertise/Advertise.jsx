import React from 'react'
import './Advertise.css'
import exclusive_image from '../Images/exclusive_img.jpg'

const Advertise = () => {
  return (
    <div className='advertise'>
      <div className='advertise-left'>
        <h1>Hurry Up</h1>
        <h1> Exclusive Offers For You</h1>
        <p>Only On Our Best Sellering Products</p>
        <button>Check It Now</button>
      </div>
      <div className='Advertise-right'>
        <img src={exclusive_image} alt=""/>

      </div>
      
    </div>
  )
}

export default Advertise
