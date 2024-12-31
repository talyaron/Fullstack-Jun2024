import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to={'/'}>home /</Link>
      <Link to={'/yonatan'}>yonatan</Link>
    </div>
  )
}

export default About
