import React from "react";
import Sidebar from "./sideBar";
import "./tweets.scss";
import Feed from "./feed";
import Widgets from "./widgets";

const Tweets = () => {
    return (
        <div className="tweets">
            <Sidebar />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widgets />
        </div>
    )
}

export default Tweets;