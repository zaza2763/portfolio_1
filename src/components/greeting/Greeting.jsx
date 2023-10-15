import React from 'react'
import './Greeting.scss'
import img from './img/1.webp'

const Greeting = () => {
  return (
    <div className='greeting-wrap'>
      <div className="greeting-block">
        <p><span>Hi,</span> <span>I'm <span className='myName'>Alex</span>,</span> <span>web developer</span></p>
      </div>
    <div className="greeting-img">
      <img src={img} alt="" />
    </div>
    </div>
  )
}

export default Greeting

