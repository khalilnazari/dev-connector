import React from 'react'
import './navbar.scss'
import {FaCodeBranch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  // const [Login, setLogin] = useState(false); 
  // setItem('login', 'true')
  // getItem('devLogin')

  return (
    <nav className="navbar">
      <div className="container">
        {/* logo */}
        <h1><Link to="/" className='logo-link'><FaCodeBranch /> DevConnector</Link></h1>
        <ul>
          <li><Link to="/profiles" className='nav-link'>Developers</Link></li>
          <li>
            <Link to="/dashboard" title="Dashboard" className='nav-link'>
              <span className="hide-sm">Dashboard</span>
            </Link>
          </li>

          <li><Link to="/posts" className='nav-link'>Posts</Link></li>

          <li>
            <Link to="/login" title="Logout" className='nav-link'>  
              <span className="hide-sm">Logout</span>
            </Link>
          </li>

          <li>
            <Link to="/login" title="Dashboard" className='nav-link'>
              <span className="hide-sm">Login</span>
            </Link>
          </li>
          <li>
            <Link to="/register" title="Dashboard" className='nav-link'>
              <span className="hide-sm">Register</span>
            </Link>
          </li>

        {/* linkes */}
        {/* <ul>
          <li><Link to="/profiles" className='nav-link'>Developers</Link></li>
          {
            Login === true ? (
            <>
              

              <li>
                <Link to="/dashboard" title="Dashboard" className='nav-link'>
                  <span className="hide-sm">Dashboard</span>
                </Link>
              </li>

              <li><Link to="/posts" className='nav-link'>Posts</Link></li>

              <li>
                <Link to="/login" title="Logout" className='nav-link'>  
                  <span className="hide-sm">Logout</span>
                </Link>
              </li>
            </>
            ) : (
            <>
              <li>
                <Link to="/login" title="Dashboard" className='nav-link'>
                  <span className="hide-sm">Login</span>
                </Link>
              </li>
              <li>
                <Link to="/register" title="Dashboard" className='nav-link'>
                  <span className="hide-sm">Register</span>
                </Link>
              </li>
            </>
            )
          }*/}
        </ul> 
      </div>
    </nav>
  )
}

export default Navbar