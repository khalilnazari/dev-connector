import React from 'react'
import './login.scss'
import {FaUser} from 'react-icons/fa';
import { PrimaryButton } from '../../components/buttons/Buttons';
import { Link } from 'react-router-dom';


const Login = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = localStorage.getItem('devc-email'); 
    const password = localStorage.getItem('devc-password'); 

    console.log(email, password)
  }

  return (
    <section className='login-section'>
      <div className="container">
        <h2 className="page-title">Log In</h2>
        <div className="lead"><FaUser /> Sign into your account</div>

        <form action="" method='POST' onSubmit={handleFormSubmit}>
          <input type="email" name='email' placeholder='Email Address'/>
          <input type="password" name='password' placeholder='Password'/>
          <PrimaryButton text='Submit' bgColor="green" textColor="white" type='submit'/>
        </form>

        <p className='login-link'>Don't have an account? <Link to='/register'>Sign up</Link></p>
      </div>
    </section>
  )
}

export default Login