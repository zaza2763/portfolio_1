import React, { useState } from 'react'
import './Menu.scss'
import hamburgerMenu from './menu-icons/Hamburger_icon.svg.png'

const Menu = () => {
  const [burgerMenu,setBurgerMenu] = useState(true)
  return (
    <div className='menu-wrap'>
      <div className="logo">
        My portfolio
      </div>
        <ul className='list'>
          <div className="menu-img" onClick={() => setBurgerMenu((burgerMenu) => !burgerMenu)}>
            <img src={hamburgerMenu} alt=""  />
          </div>
          <li className = {burgerMenu ? 'menu-close' : 'menu-open'}><a href='#AboutMe_marker'>About Me</a></li>
          <li className = {burgerMenu ? 'menu-close' : 'menu-open'}><a href='#portfolio_marker'>My projects</a></li>
          <li className = {burgerMenu ? 'menu-close' : 'menu-open'}><a href='#contact_marker'>Contacts</a></li>
        </ul>
      </div>
  )
}

export default Menu
