import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark navbar-fixed-top fixed-top ">
        <div className="container  justify-content-between "> 
        
        <div  className="logo d-flex align-items-center ">
        
        <FaCoins className='icon' />
        
        <Link style={{textDecoration:"none"}} to="/">
        <h1>Coin Info</h1> 
        </Link>
        </div>    
        
        <nav id="navbar1" className="navbar "> 
        
        <ul className='list-group list-group-horizontal navbar '> 
        <Link style={{textDecoration:"none"}} to="/about">
        <li className='nav-item'> <a className="nav-link  scrollto" href="#about"> About </a> </li> 
        </Link>
        <li className='nav-item'> <a className="nav-link" target="__blank" href="https://github.com/patil-gm" > Contact Me </a> </li> 
        </ul> 
          <i className="bi bi-list mobile-nav-toggle"></i> 
        </nav> 
        </div>
    
        </div>
    )
}



export default Navbar