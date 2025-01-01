import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <br />
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default About;
