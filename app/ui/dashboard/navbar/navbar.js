'use client'
import React from 'react'
import Link from 'next/link'

import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


const NavbarComponent = ({handleSideBar , isOpen}) => {
  const handleToggle = () => {
    isOpen ? handleSideBar(false) : handleSideBar(true)
  }
  return (
    <div className='w-full h-16 pl-4 pr-6 py-2  flex justify-between items-center bg-primary text-slate-50 shadow-md'>
      <div className='space-x-5 flex'>
      <div className='cursor-pointer' onClick={handleToggle}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </div>
        <div className='text-2xl font-semibold'>Logo</div>
      </div>
      <div className='space-x-5 flex'>
        <p>Help</p>
        <Link href='/'>
        <AccountCircleSharpIcon />
        </Link>
      </div>
    </div>
  )
}

export default NavbarComponent