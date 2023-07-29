import React from 'react'
import check from '../../assets/check.png'
import './card.scss'
import { Link } from 'react-router-dom'

const card = ({image ,alt, subtext, text}) => {
  return (
    <div className='card'>
      <div className="img">
        <img src={image} alt={`${alt}`}/>
      </div>
      <img className='check' src={check} alt='check'/>
      <div className="content">
        <h3>{text}<br/><span>{subtext}</span></h3>
      <Link to={"/?cat=estimate"} className='link'>
          Read More
      </Link>
      </div>
    </div>
  )
}

export default card
