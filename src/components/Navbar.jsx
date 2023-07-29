import React from 'react'
import { ReactDOM } from 'react'
import logo from '/assets/airbnb-logo.png'

function Navbar(){
    return (
        <nav className='navbar'>
            <img className="logo" src={logo} />
        </nav>
    )
}

export default Navbar
