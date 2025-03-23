import React from 'react'
import { NavLink } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {
  return (
    <div className='bg-black text-white py-4 px-8 flex items-baseline justify-between'>
      <h1 className='text-xl'>Tailwind</h1>


      <nav className='space-x-5 hidden sm:block'>

        <NavLink className={(e) => e.isActive ? 'text-blue-500': ''} to={'/'}>Home</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-blue-500': ''} to={'/about'}>About</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-blue-500': ''} to={'/contact'}>Contact</NavLink>
      </nav>
     <GiHamburgerMenu className='block sm:hidden text-xl' />
    </div>
  )
}