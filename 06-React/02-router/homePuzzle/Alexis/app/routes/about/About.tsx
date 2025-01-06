import { Link, Outlet } from "react-router"
import React from "react";


const About = () =>{
    return(
    <>
    
    <h1>About:</h1>
    <ol>
        <li><Link to="profile">Profile</Link></li>
        <br />
        <li><Link to="apps">Apps</Link></li>
        
    </ol>
    <Outlet />
    </>
    );
};


export default About;
