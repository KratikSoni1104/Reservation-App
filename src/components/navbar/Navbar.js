import React from 'react'
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <span className='logo'>lamaBooking</span>
            <div className='navItems'>
                <button className='navButtons'>Register</button>
                <button className='navButtons'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar