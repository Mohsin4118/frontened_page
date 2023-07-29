import React from 'react'
import {Link}from 'react-router-dom'
import sign from '../../assets/location.svg'
import phone from '../../assets/phone 2.svg'
import whatsapp from '../../assets/whatsapp1.svg'
import email from '../../assets/email 2.svg'
import linkedin from '../../assets/linkedin1.svg'
import insta from '../../assets/insta1.svg'
import fb from '../../assets/facebook1.svg'

import './footer.scss'
const footer = () => {
  return (
    <div className='footer'>
      <div className="estimator">
        <span>_____________________________________</span>
        <div className="text">
        <span>Blue Book Estimator</span>
        </div>
        <span>_____________________________________</span>
        <span className='inner_text'>
        The Blue Book Estimator  ®, is a professional 
        cost estimation consultancy specializing in
         providing detailed construction cost estimates.
          Our cost consultants provide our clients,
           both public and private institutions with 
           different office locations throughout the 
           United States with expert, data-driven
            guidance on their construction projects.
        </span>
      </div>
      <div className="navigation">
      <span>_____________________________________</span>
        <div className="text">
        <span>Navigation</span>
        </div>
        <span>_____________________________________</span>
        <div className="bar">
        <Link className='link' to={"/services"}><span>Services</span></Link>
        <Link className='link' to={"/services"}><span>Projects</span></Link>
        <Link className='link' to={"/services"}><span>Contact Us</span></Link>
        <Link className='link' to={"/services"}><span>About us</span></Link>
        </div>
      </div>
      <div className="contact">
      <span>_____________________________________</span>
        <div className="text">
        <span>Contact</span>
        </div>
        <span>_____________________________________</span>
        <div className="logos">
        <div className="logo">
          <img src={sign} alt='location' />
          <span>Head Office: 102-12,<br/> Arlington, VA 22201 United States</span>
        </div>
        <div className="logo">
          <img src={phone} alt='phone' />
          <span className='num'>+1 917 300 1079</span>
        </div>
        <div className="logo">
          <img src={email} alt='email' />
          <span>Hbluebookestimator@gmail.com</span>
        </div>
        <div className="social_logo">
          <img src={linkedin} alt='linkedin'/>
          <img src={whatsapp} alt='whatsapp'/>
          <img src={insta} alt='insta'/>
          <img src={fb} alt='fb'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default footer
