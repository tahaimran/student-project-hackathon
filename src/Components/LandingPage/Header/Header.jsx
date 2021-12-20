import React from 'react'
import './Header.css'
import Button from '../../Button'
import Logo from '../../../logo.png'
function Header() {
    return (
        <div>
        <nav className="navbar">
          <div className="container-fluid">
            <img src={Logo} className=" logo"  />
            <div className="nav d-flex justify-space-around" id="navbarSupportedContent">
              <ul className="nav mb-2 p-2 mb-lg-0">
                <li className="nav-item">
                  <p className="nav-link ">Feature</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">Our Team</p>
                </li>
                <li className="nav-item">
                  <Button />
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
      </div>
    )
}

export default Header
