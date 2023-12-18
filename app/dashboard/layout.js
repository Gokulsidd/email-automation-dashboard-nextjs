'use client'
import React, { useState } from 'react'
import SidebarComponent from '@/app/ui/dashboard/sidebar/sidebar'
import NavbarComponent from '../ui/dashboard/navbar/navbar'

const Layout = ({children}) => {
  const [showSideBar , setShowSideBar] = useState(false)
  return (
    <div className='flex-col h-full'>
        <div>
            <NavbarComponent handleSideBar={setShowSideBar} isOpen={showSideBar} />
        </div>
        <div className='w-full h-[150vh] flex'>
            <SidebarComponent handleSideBar={showSideBar} />
            <div className={showSideBar ? `min-w-[1300px]` : `w-full`}>{children}</div>
        </div>
    </div>
  )
}

export default Layout