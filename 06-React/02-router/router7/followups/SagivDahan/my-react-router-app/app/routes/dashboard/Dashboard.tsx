import React from 'react'
import { Link } from 'react-router'
const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <h1>dashboard</h1>
        <Link to="/">Home</Link>
        <Link to="/contact">To Contact</Link>
        <Link to="/userdetails">user details</Link>
    </>
  )
}

export default Dashboard