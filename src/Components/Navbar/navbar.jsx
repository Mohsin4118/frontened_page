import React from 'react'
import './navbar.scss'
import phone from '../../assets/phone 1.svg'
import email from '../../assets/email 1.svg'
import whatsapp from '../../assets/whatsapp.png'
import linkedIn from '../../assets/linkedIn.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import logo from '../../assets/logo.jpg'

const navbar = () => {
  return (
    <div className="container">
      <div className='navbar'>
      <div className='logo'>
        <img src={phone} alt='phone'/>
        <span>+1 917 300 1079</span>
      </div>
      <div className='logo'>
        <img src={email} alt='email'/>
        <span>bluebookestimators@gmail.com</span>
      </div>
      <div className='logo'>
        <img src={whatsapp} alt='phone'/>
      </div>
      <div className='logo'>
        <img src={linkedIn} alt='email'/>
      </div><div className='logo'>
        <img src={instagram} alt='phone'/>
      </div>
      <div className='logo'>
        <img src={facebook} alt='email'/>
      </div>
    </div>
    <div className="header">
      <div className="logo">
        <img src={logo} alt='logo'/>
        <div className="text">
        <span>Home</span>
        <span>Services</span>
        <span>Work Samples</span>
        <span>Testimonials</span>
        <span>About Us</span>
        <span>Payment</span>
        <span>Estimation Fees</span>
        </div>
      </div>
      <div className="plan">
        <span>Upload your Plan here</span>
      </div>
    </div>
    </div>
  )
}

export default navbar
