import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/Navbar'
import Footer from './components/Footer'
const Layout = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
