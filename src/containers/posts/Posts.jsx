import React from 'react'
import { PrimaryButton } from '../../components/buttons/Buttons';
import './posts.scss'
import {PostItem, Textarea} from '../../components'

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
          <Textarea placeholder="Write here ..."/>
          <PrimaryButton type="submit" bgColor='#000' textColor='#eeeeee' text='Submit'/>
        </form> 

        {/* post item */}
        <div className='post-item'>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>       
      </div>
    </section>
  )
}

export default Posts