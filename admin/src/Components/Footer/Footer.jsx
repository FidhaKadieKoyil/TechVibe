import React from 'react'
import './Footer.css'
import footer_logo from '../Images/logo.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>Elegant Edge</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 Elegant Edge - All rights reserved</p>
        </div>
      
      
    </div>
  )
}

export default Footer
