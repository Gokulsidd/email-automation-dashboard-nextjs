import React from 'react'
import SidebarComponent from '../ui/dashboard/sidebar/sidebar'
import NavbarComponent from '../ui/dashboard/navbar/navbar'

const Layout = ({children}) => {
  return (
    <div>
        <div>
            <SidebarComponent />
        </div>
        <div>
            <NavbarComponent />
            {children}
        </div>
    </div>
  )
}

export default Layout