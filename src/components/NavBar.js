import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {
    to: '/',
    num: '00',
    name: 'HOME',
  },
  {
    to: '/destination',
    num: '01',
    name: 'DESTINATION',
  },
  {
    to: '/crew',
    num: '02',
    name: 'CREW',
  },
  {
    to: '/technology',
    num: '03',
    name: 'TECHNOLOGY',
  },
]

const NavBar = ({ isOpen }) => {
  return (
    <nav className={`order-2 sm:block ${isOpen ? 'block' : 'hidden'}`}>
      <ul className="flex flex-col sm:flex-row sm:h-24 lg:my-10 sm:items-center navlist z-[1]">
        {links.map(({ to, num, name }) => (
          <NavLink key={name} to={to} className="sm:h-full flex items-center">
            <span className="font-bold mr-[12px] inline md:hidden lg:inline">
              {num}
            </span>
            {name}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
