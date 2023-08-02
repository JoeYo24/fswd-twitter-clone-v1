import React from "react";
import Sidebar from "@src/tweets/sideBar"
import UserProfile from "./userProfile"
import UserFeed from "./userFeed"

import "./profile.scss";

const Profile = () => {
    const username = window.location.pathname.split("/")[2]; // Extract username from the URL

    return (
        <div className="profile">
            {/* Sidebar */}
            <Sidebar />
            <div className="container">        
                {/* User Profile */}
                <UserProfile username={username} />
                {/* User Feed */}
                <UserFeed username={username} />
            </div>
        </div>
    );
}

export default Profile;
