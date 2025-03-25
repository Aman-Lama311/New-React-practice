import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5 bg-black text-white'>
      <NavLink to='/' className='text-2xl font-semibold'>
      Home</NavLink>
      <nav className='space-x-8'>
      <NavLink className={({isActive}) => isActive? 'text-green-500': ''} to='/todo-list'>Todo</NavLink>

      <NavLink className={({isActive}) => isActive? 'text-green-500': ''} to='/tempreture-converter'>Tempreture</NavLink>

      <NavLink className={({isActive}) => isActive? 'text-green-500': ''} to='/password-ShowHide'>PasswordHide</NavLink>

      <NavLink className={({isActive}) => isActive? 'text-green-500': ''} to='/dark-light'>DarkLight</NavLink>
      
      <NavLink className={({isActive}) => isActive? 'text-green-500': ''} to='/like-dislike'>LikeDislike</NavLink>
      </nav>
    </div>
  )
}

export default Header
