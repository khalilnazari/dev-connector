import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.scss'
import {ImProfile} from 'react-icons/im'
import {FaToolbox, FaGraduationCap} from 'react-icons/fa'


const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <h1 className="page-title">Dashboard</h1>
        <p className='lead'>Welcome John Smith</p>

        {/* edit button */}
        <div className='profile-action-section'>
          <Link className='profile-action-btn' to="/create-profile"><ImProfile /> Edit Profile</Link>
          <Link className='profile-action-btn' to="/add-experience"><FaToolbox /> Add Experience</Link>
          <Link className='profile-action-btn' to="/add-education"><FaGraduationCap />Add Education</Link>
        </div>


        {/* section */}
        <h2 className='section-title'>Experience Credentials</h2>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Microsoft	</td>
              <td>Senior Developer</td>
              <td>
                <span>Oct 2011 - Current</span>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>

            <tr>
              <td>Microsoft	</td>
              <td>Senior Developer</td>
              <td>
                <span>Oct 2011 - Current</span>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>


        <h2 className='section-title'>Education Credentials</h2>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Microsoft	</td>
              <td>Senior Developer</td>
              <td>
                <span>Oct 2011 - Current</span>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>

            <tr>
              <td>Microsoft	</td>
              <td>Senior Developer</td>
              <td>
                <span>Oct 2011 - Current</span>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <button className='delete-account-btn'>Delete My Account</button>
      </div>
    </section>
  )
}

export default Dashboard