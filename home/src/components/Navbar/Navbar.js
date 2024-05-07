import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4 bg-gray-800 text-white'>
        <a href='home' className='underline-none mr-4'>Home</a>
        <a href='about' className='underline-none mr-4'>About</a>
    </nav>
  )
}

export default Navbar