import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    < div className={'navitem'}>
        
           
        <NavLink to="/" className={'NavStyle'}>Home</NavLink>
        
        
        <NavLink to="/Students" className={'NavStyle'}>Students</NavLink>
    
    
        <NavLink to="/Contact" className={'NavStyle'}>Contact Us</NavLink>
           
    </div>
  )
}

export default Navbar