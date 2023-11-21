import React from 'react'
import SidebarComponent from '@/app/ui/dashboard/sidebar/sidebar'
import NavbarComponent from '../ui/dashboard/navbar/navbar'

const Layout = ({children}) => {
  return (
    <div className='flex-col h-screen'>
        <div>
            <NavbarComponent />
        </div>
        <div className='w-full h-full flex'>
            <SidebarComponent />
            {children}
        </div>
    </div>
  )
}

export default Layout