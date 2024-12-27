import React from 'react'
import { Link, Outlet } from 'react-router'

const contact = () => {
  return (
    <>
     <Link to='dashboard/profile/profile'>To profile</Link>
     <Outlet></Outlet>
    </>
  )
}

export default contact