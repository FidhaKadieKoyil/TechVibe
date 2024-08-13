import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Images/breadcrum.png'

const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div>
        <div className='breadcrum'>
            Home<img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
        </div>
      
    </div>
  )
}

export default Breadcrum
