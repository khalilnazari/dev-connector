import React from 'react'
import { PrimaryButton } from '../../components/buttons/Buttons';
import './posts.scss'

const Posts = () => {
  
  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  // jsx
  return (
    <section className="posts-section">
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <p className="lead"> Welcome to the community</p>
        <form onSubmit={handleSubmit}>
          <textarea name="" className='' id="" placeholder='Write there...'></textarea>
          <PrimaryButton type="submit" bgColor='#000' textColor='#eeeeee' text='Submit'/>
        </form>


        
      </div>
    </section>
  )
}

export default Posts