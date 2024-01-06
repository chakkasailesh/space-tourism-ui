import React, { useState } from 'react'
import NavBar from './NavBar'
import logo from '../assets/shared/logo.svg'
import close from '../assets/shared/icon-close.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex justify-between items-center header">
      <img src={logo} alt="logo" className="logo" width="40px" height="40px" />
      <img
        src={isOpen ? close : hamburger}
        alt={isOpen ? 'close nav' : 'open nav'}
        onClick={() => setIsOpen((prev) => !prev)}
        className="right-6 absolute sm:hidden z-10"
      />
      <NavBar isOpen={isOpen} />
    </div>
  )
}

export default Header
