import React from 'react'
import './postItem.scss'
import {profileImage} from '../../assets'
import { Link } from 'react-router-dom'
import {PrimaryButton} from '../index'
import {AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'

const PostItem = () => {
  return (
    <div className='posteItem'>
        <div className="postItem-avatar">
            <img src={profileImage} className="postItem-image" alt="profileImage"/>
            <Link to="/profile" className='author-name'>John Smith</Link>
        </div>

        <div className='posteItem-text'>
            <p className='text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.
            </p>
            
            <div className='postItem-buttons'>
                <PrimaryButton bgColor='lightgray' textColor='black' text={<AiTwotoneLike />}/>
                
                <PrimaryButton bgColor='lightgray' textColor='black' text={<AiTwotoneDislike/>} />

                <Link to='/post'>
                    <PrimaryButton bgColor='green' textColor='white' text='Discussion'/>
                </Link>
            </div>
        </div>
    </div>
  )
}


const PostDetail = () => {
    return (
      <div className='posteItem'>
          <div className="postItem-avatar">
              <img src={profileImage} className="postItem-image" alt="profileImage"/>
              <Link to="/profile" className='author-name'>John Smith</Link>
          </div>
  
          <div className='posteItem-text'>
              <p className='text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolores officia assumenda dolor maiores sint pariatur quia voluptatibus voluptate perspiciatis commodi possimus nemo aut, voluptas expedita facilis amet hic culpa.
              </p>
          </div>
      </div>
    )
  }

export {PostItem, PostDetail}