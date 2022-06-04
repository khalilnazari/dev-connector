import React from 'react'
import {Routes, Route} from 'react-router-dom'; 
import {Dashboard, Home, Login, Post, Posts, Profile, Profiles, Register} from './containers'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/post' element={<Post />}/>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/profiles' element={<Profiles />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='*' element={<div>Not Found</div>}/>
    </Routes>
  )
}

export default Routers