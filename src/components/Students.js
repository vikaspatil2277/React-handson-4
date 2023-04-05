import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

import '../App.css'

const Students = () => {
  return (
    
    (
      <div>
          <Navbar/>
          <div className='std-title'>
              <span className='stud'>Students Details</span>
              <button className='add-student'>
                  Add New Student
              </button>
          </div>
          <div>
              <table>
                  <thead>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Course</th>
                      <th>Batch</th>
                      <th>Changes</th>
                  </thead>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
                  <tr>
                      <td>vikas Patil</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link to={'/edit'}>Edit</Link> </td>
                  </tr>
              </table>
          </div>
      </div>
    )
  )
}

export default Students