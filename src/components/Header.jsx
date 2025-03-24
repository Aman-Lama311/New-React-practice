import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-10 py-5 bg-black text-white'>
      <NavLink to='/' className='text-2xl font-semibold'>Home</NavLink>
      <nav className='space-x-5'>
      <NavLink to='/todo-list'>Todo</NavLink>
      <NavLink to='/tempreture-converter'>Tempreture</NavLink>
      <NavLink to='/password-ShowHide'>PasswordHide</NavLink>
      <NavLink to='/dark-light'>DarkLight</NavLink>
      <NavLink to='/like-dislike'>LikeDislike</NavLink>
      </nav>
    </div>
  )
}

export default Header
