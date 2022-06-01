import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/Buttons'
import './register.scss'
import {FaUser} from 'react-icons/fa'


const Register = () => {

  const [name, setName] = useState(); 
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState(); 
  const [passwordConfirm, setPasswordConfirm] = useState(); 
  const [inputError, setInputError]= useState('');

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onPasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value)
  }
  

  // form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let passErr = false; 
    if(password !== passwordConfirm) {
      console.log('err pass')
      setInputError('Password does not match!')
      passErr = true; 
    } 
    
    if(!passErr) {
      
      localStorage.setItem('devc-name', name); 
      localStorage.setItem('devc-email', email); 
      localStorage.setItem('devc-password', password); 
    }
  }

  // jsx
  return (
    <section className='register-section'>
      <div className="container">
        <h2 className="page-title">Sign Up</h2>
        <div className="lead"><FaUser /> create your account</div>

        <p className='error-text'>{inputError}</p>
        <form action="" method='POST' onSubmit={handleFormSubmit}>
          <input type="text" name='name' placeholder='Name' onChange={e => onNameChange(e)}/>
          <input type="email" name='email' placeholder='Email Address' onChange={e => onEmailChange(e)}/>
          <input type="password" name='password' placeholder='Password' onChange={ e=> onPasswordChange(e) }/>
          <input type="password" name='passwordConfirm' placeholder='Confirm Password' onChange={e => onPasswordConfirmChange(e)}/>
          <PrimaryButton text='Submit' bgColor="green" textColor="white" type='submit'/>
        </form>

        <p className='login-link'>Have an account <Link to='/login'>Login</Link></p>
      </div>
    </section>
  )
}

export default Register