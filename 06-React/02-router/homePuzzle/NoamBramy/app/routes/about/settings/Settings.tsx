import React from "react";
import { Link, Outlet } from "react-router";

const Settings = () => {
  return (
    <div>
      <h1>This is Website Settings</h1>
      <nav>
        <Link to="editprofile">Edit Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Settings;
