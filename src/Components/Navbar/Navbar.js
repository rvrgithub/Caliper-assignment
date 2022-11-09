import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="container">
     <Link to="/">CALIPER</Link>
     <Link to="/">Home</Link>

     <Link to="/products">Products</Link>
     <Link  to="/about">About</Link>
     <Link to="/"></Link>
    </div>
  )
}
