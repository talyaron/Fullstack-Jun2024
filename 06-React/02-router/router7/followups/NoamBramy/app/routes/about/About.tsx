import React from 'react'
import { Link, Outlet } from 'react-router'
const About = () => {
    return (
        <>
            <h1>About</h1>
            <Link to="">Profile</Link>
            <br></br>
            <Link to="settings">Settings</Link>
            <br></br>
            <Outlet />
        </>
    )
}

export default About