import React from 'react'
import './profiles.scss'
import {ProfileCard} from '../../components'

const Porfiles = () => {

  const develoeprs = [
    {id:1, name:'John Doe'},
    {id:2, name:'Khalil Ahmad'},
    {id:3, name:'Mustafa'},
    {id:4, name:'Sabrina'},
    {id:5, name:'Jack Ma'},
    {id:6, name:'Shamsii'},
    {id:7, name:'Hazi Ahmad'},
    {id:8, name:'Sami Ahmad'},
  ]
  return (
    <section className='profiles-section'>
      <div className="container">
        <h1 className='page-title'>Developers</h1>
        <p className='lead'>Browse and connect with developers</p>

        <div className="profiles">
        {develoeprs.map(developer => (
          <ProfileCard name={developer.name} key={developer.id}/>
        ))}
        </div>
       
      </div>
    </section>
  )
}

export default Porfiles