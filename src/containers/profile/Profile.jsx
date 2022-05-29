import React from 'react'
import './profile.scss'
import { Repo, BackButton } from '../../components'
import profileImage from '../../assets/profileImage.png'

import {IoLogoLinkedin, IoLogoCss3} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import {GiEarthAmerica} from 'react-icons/gi'
import {ImHtmlFive} from 'react-icons/im'
import {SiJavascript, SiPython} from 'react-icons/si'

const Profile = () => {
  return (
    <section className='profile-section'>
      <div className="container">
        <BackButton url="/profiles"/>

        {/*  background*/}
        <div className='profile-background'>
          <img src={profileImage} alt="profileImage" className='profile-image'/>

          <h2 className='page-title'>John Doe</h2>
          <p className='lead'>Developer at Microsoft</p>
          <p className='lead'>Seattle, WA</p>

          <div className='social-links'>
            <a href="/website.html"><GiEarthAmerica className='social-link'/></a>
            <a href="/website.html"><IoLogoLinkedin className='social-link'/></a>
            <a href="/website.html"><AiFillFacebook className='social-link'/></a>
            <a href="/website.html"><FaTwitterSquare className='social-link'/></a>
            <a href="/website.html"><FaInstagramSquare className='social-link'/></a>
          </div>
        </div>


        {/* about */}
        <div className="profile-about">
          <h2 className="text-primary">John's Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            distinctio tempora. Obcaecati vero ad similique numquam. Commodi
            incidunt quia non!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            distinctio tempora. Obcaecati vero ad similique numquam. Commodi
            incidunt quia non!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            distinctio tempora. Obcaecati vero ad similique numquam. Commodi
            incidunt quia non!
          </p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            <div className="skill-item"><ImHtmlFive className="skill-icon" /> HTML</div>
            <div className="skill-item"><IoLogoCss3 className="skill-icon" /> CSS</div>
            <div className="skill-item"><SiJavascript className="skill-icon" /> JavaScript</div>
            <div className="skill-item"><SiPython className="skill-icon" /> Python</div>
          </div>
        </div>


        {/* edu and services */}
        <div className="edu-exp">
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experiences</h2>
            <div>
              <h3>Microsoft</h3>
              <p>Oct 2011 - Current</p>
              <p><strong>Position: </strong> Senior Developer</p>
              <p>
                <strong>Description: </strong>Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Perspiciatis in sed officiis,
                dolorem amet cum?
              </p>
            </div>
            <p className="line"></p>
            <div>
              <h3>Sun Microsystems</h3>
              <p>Oct 2004 - Nov 2010</p>
              <p><strong>Position: </strong> Systems Admin</p>
              <p>
                <strong>Description: </strong>Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Perspiciatis in sed officiis,
                dolorem amet cum?
              </p>
            </div>
          </div>

          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            <div>
              <h3>University Of Washington</h3>
              <p>Sep 1993 - June 1999</p>
              <p><strong>Degree: </strong> Masters</p>
              <p><strong>Field Of Study: </strong> Computer Science</p>
              <p>
                <strong>Description: </strong>Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Perspiciatis in sed officiis,
                dolorem amet cum?
              </p>
            </div>
            <p className="line"></p>
          </div>
        </div>


        {/* repositories */}
        <h2 className='git-title'><BsGithub /> <span>Github Repositories</span></h2>
        <Repo />
        <Repo />
        <Repo />
      </div>
    </section>
  )
}

export default Profile