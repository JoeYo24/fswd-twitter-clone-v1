import React from "react";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';

const UserProfile = ({ username, email }) => {
    return (
        <div className="userProfile">
            <div className="userProfile-coverPhoto">
            </div>
            <div className="userProfile-info">
                <Avatar className="userProfile-avatar" />
                <div className="userProfile-name">
                    <h3 className="user-name-text">
                        {username}
                        <VerifiedIcon className="user-name-badge" />
                    </h3>

                    <p className="user-name-email">{email}</p>
                    <p className="user-name-bio">This is a bio!</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;