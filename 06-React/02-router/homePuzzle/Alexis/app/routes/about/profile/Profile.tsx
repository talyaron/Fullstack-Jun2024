import React from "react";
import { Link } from "react-router";

const Profile = () =>{
    return(
        <div>
            <h2>My profile</h2>
            <Link to="settings">Settings</Link>
        </div>
    )
};

export default Profile;