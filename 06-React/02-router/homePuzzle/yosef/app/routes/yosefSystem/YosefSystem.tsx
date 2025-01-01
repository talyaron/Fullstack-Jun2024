import React from 'react'
import { Link, Outlet } from 'react-router'

function YosefSystem() {
  return (
    <div>
      <h1 style={{backgroundColor: "red"}}>hey from yosef dashbord system</h1>
      <br />
      <Link to="" style={{backgroundColor: "yellow"}}>Join FaceBook</Link>
      <br />
      <Link to="twiter" style={{backgroundColor: "green"}}>Join My Twiter</Link>
      <br />
      <Link to="instegram" style={{backgroundColor: "blue"}}>Join My Instagram</Link>
      <br /><br />
      <Outlet></Outlet>
    </div>
  )
}

export default YosefSystem
