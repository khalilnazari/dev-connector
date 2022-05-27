import React from 'react'
import './profileCard.scss'
import profileImage from '../../assets/profileImage01.webp'
import {PrimaryLink} from '../index'

const ProfileCard = ({name}) => {
  return (
    <div className="profile-card">
        <img src={profileImage} alt="profileImage" />
        <h2>{name}</h2>
        <p>Developer at Microsoft</p>
        <p>Seattle, WA</p>
        <PrimaryLink url="/profile" text="view profile" />
    </div>
  )
}

export default ProfileCard