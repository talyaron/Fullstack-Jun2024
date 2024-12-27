import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
    return (
        <div style={{
            backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', flex: 1, height: "100vh", padding:
                "10px"
        }}>
            <h1>Dashboard</h1>
            <Link to="">Profile</Link>
            <br></br>
            <Link to="settings">Settings</Link>
            <br></br>
            <Outlet />
        </div>
    )
}

export default Dashboard