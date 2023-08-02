import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./sideBarOptions";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon" />

            <a className="link-without-underline" href="/tweets"><SidebarOption href="/tweets" active Icon={HomeIcon} text="Home"/></a>
            <SidebarOption Icon={TagIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={Person2OutlinedIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            {/* Button -> Tweet */}
            <Button href="/tweets" className="sidebar-tweet">Tweet</Button>

        </div>
    )

}

export default Sidebar;