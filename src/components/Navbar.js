import { Link } from "react-router-dom";
import "./Navbar.css";

import React from 'react'

const Navbar = () => {
  return (
    <header className="header">
      
        <Link to="/">
          <h1 className="nav-logo">Nurýagdy</h1>
        </Link>
        
        <ul className="nav-menu">
          <li class="hvr-radial-in"><Link to ="/about">Men Barada</Link></li>
          <li class="hvr-radial-in"><Link to ="/skills">Hünärler</Link></li>
          <li class="hvr-radial-in"><Link to = "/services">Hyzmatlar</Link></li>
        </ul>
     
    </header>
  )
}

export default Navbar
