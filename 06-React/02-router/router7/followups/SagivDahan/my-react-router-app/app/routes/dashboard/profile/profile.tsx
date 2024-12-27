import React from 'react'
import { Link } from 'react-router'

const profile = () => {
  return (
    
    <>
        <div>profile</div>
        <Link to="/">Home</Link>
        <Link to="/contact">To Contact</Link>
        <Link to="/userdetails">user details</Link>
    </>
  )
}

export default profile