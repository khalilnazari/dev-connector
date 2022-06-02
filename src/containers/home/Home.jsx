import React, { useEffect } from 'react'
import './home.scss'
import { Link } from 'react-router-dom'


const Home = () => {
  useEffect(() => {
    const login = localStorage.getItem('devc-login'); 
    console.log(login)
  })

  // jsx
  return (
    <section className='home-section'>
        <div className="container">
            <div className='content'>
                <h1>Developer Connector</h1>
                <p>Create developer profile/portfolio, share posts and get help from other developers</p>
            
                <div className='btns'>
                    <Link to='/login' className='btn sign-in'>Login</Link>
                    <Link to='/register' className='btn sign-up'>Sign up</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home