import React from 'react'
import Logo from "../assets/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <img className='Navbar-logo' src={Logo} alt="logo"/>
    </>
  )
}

export default Navbar