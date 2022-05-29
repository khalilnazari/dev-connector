import React from 'react'
import './post.scss'
import { PostDetail, Textarea, PrimaryButton, BackButton} from '../../components'

const Post = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  } 

  // jsx
  return (
    <section className="post">
      <div className="container">
        <BackButton url="/posts"/>
        <PostDetail />

        <div className='comment-bunner'>
          Leave a comment!
        </div>

        <form onSubmit={handleSubmit}>
          <Textarea placeholder="Comment on this post"/>
          <PrimaryButton type="submit" bgColor='#000' textColor='#eeeeee' text='Submit'/>
        </form> 


        <PostDetail />
        <PostDetail />
        <PostDetail />
        <PostDetail />


      </div>
    </section>
  )
}

export default Post