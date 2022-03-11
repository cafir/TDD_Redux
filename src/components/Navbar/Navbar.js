import React from 'react'
import './styles.scss'
import Logo from '../../assets/img/logoCafirWhite.png'

const Navbar = () => {

  return (
    <div>
        <div className='navbar'>
          <img className='navbar__logo' src={Logo} alt="Logo"/>
          <div className='navbar__option'>
            <ul>
              <li><a href='#'>About Me</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Contact Me</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar