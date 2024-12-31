import React from 'react'
import { Link } from 'react-router'
import styles from './facebook.module.scss'

function Facebook() {
  return (
    <div style={{backgroundColor: "gray"}}>
      <h1>Facebook Main</h1>
      <Link to="/">back to Home</Link> | <Link to="/yosefSystem/twiter">go to Twiter</Link>
      <p>Cooming soon...</p>
      <img src="https://cdn.pixabay.com/photo/2016/11/05/08/42/facebook-1799690_1280.png" alt="facebook logo" />
    </div>
  )
}

export default Facebook
