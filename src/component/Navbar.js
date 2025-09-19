import React from 'react'
import logoImg from "../assets/logo.png"
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
        <img src={logoImg} alt="logo" /><span>wandermate</span>
        </Link>
      </h1>
      <nav className="gnb">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/travel'>TRAVEL</NavLink>
        <NavLink to='/tips'>TIPS</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
      </nav>
    </header>
  )
}

export default Navbar