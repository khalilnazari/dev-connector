import React, { useState } from 'react'
import './login.scss'
import {FaUser} from 'react-icons/fa';
import { PrimaryButton } from '../../components/buttons/Buttons';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();
  // const [login2, setLogin2] = useState(); 

  // input handler
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const login = true; 
  // submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password); 

    navigate('/dashboard')
  }

  // jsx
  return (
    <section className='login-section'>
      <div className="container">
        <h2 className="page-title">Log In</h2>
        <div className="lead"><FaUser /> Sign into your account</div>

        <p className='error-text'>{login === false ? 'Email or password is not correct!':''}</p>
        
        <form action="" method='POST' onSubmit={handleFormSubmit}>
          <input type="email" name='email' placeholder='Email Address' autoComplete='email' onChange={e=>onEmailChange(e)} />
          <input type="password" name='password' placeholder='Password' autoComplete='current-password' onChange={e=>onPasswordChange(e)}/>
          <PrimaryButton text='Submit' bgColor="green" textColor="white" type='submit'/>
        </form>

        <p className='login-link'>Don't have an account? <Link to='/register'>Sign up</Link></p>
      </div>
    </section>
  )
}

export default Login