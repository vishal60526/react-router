import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Github from '../github/Github'
function Layout() {
  return (
        <>
      <Header/>
        <Outlet/>
       <Footer/>
      
       </>
  )
}

export default Layout;
