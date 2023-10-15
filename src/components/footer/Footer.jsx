import React from 'react'
import './Footer.scss'
import img1 from './img/mail.webp'
import img2 from './img/phone.png'
import img3 from './img/LinkedIn_icon_circle.svg.png'

const Footer = () => {
  return (
    <div className='footer'>

          <div className="contacts">
            
            <div className='contact_item'>
              <div className='contact-img'><img src={img1} alt="" /></div>
              <p className='item'>zazapicko@gamail.com</p>
            </div>
            <div className='contact_item'>
              <div className='contact-img'><img src={img2} alt="" /></div>
              <p className='item'>+48 508-903-718</p>
            </div>
            <div className='contact_item'>
              <div className='contact-img'><img src={img3} alt="" /></div>
              <p className='item'>/alexPicko</p>
            </div>
          </div>
    </div>
  )
}

export default Footer
