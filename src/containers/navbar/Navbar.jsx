import React from 'react'
import './navbar.scss'
import {FaCodeBranch} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* logo */}
        <h1>
          <a href="index.html" className='logo-link'><FaCodeBranch /> DevConnector</a>
        </h1>

        {/* linkes */}
        <ul>
          <li><a href="profiles.html" className='nav-link'>Developers</a></li>
          <li><a href="posts.html" className='nav-link'>Posts</a></li>
          
          <li>
            <a href="dashboard.html" title="Dashboard" className='nav-link'
              >
              <span className="hide-sm">Dashboard</span></a
            >
          </li>

          <li>
            <a href="login.html" title="Logout" className='nav-link'>
              
              <span className="hide-sm">Logout</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar