import { Link, Outlet } from "react-router"
import React from "react";


const About = () =>{
    return(
    <>
    <h3>About</h3>
    <ul>
        <li><Link to="profile">Profile</Link>
        <ol><li><Link to="settings">Settings</Link></li></ol></li>
        <br />
        <li><Link to="apps">Apps</Link></li>
        
    </ul>
    <Outlet />
    </>
    );
};


export default About;
