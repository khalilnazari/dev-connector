import React from 'react'
import './repo.scss'
import {BiGitRepoForked} from 'react-icons/bi'
import {AiFillStar, AiFillEye} from 'react-icons/ai'

const Repo = () => {
  return (
    <div className='git-repos'>
        <div className="repo">
            <div className='repo-text'>
                <h3>Repo One</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere reprehenderit at sequi delectus blanditiis. Voluptatem, molestias sint earum maxime esse ratione hic iusto nostrum eveniet iste suscipit quaerat fuga!</p>
            </div>

            <div className='repo-icon'>
                <div><BiGitRepoForked /> 12</div>
                <div><AiFillStar /> 223</div>
                <div><AiFillEye /> 34</div>
            </div>
        </div>
    </div>
  )
}

export default Repo