import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-input">
            {/* Widgets */}
                <SearchIcon className="widgets-search-icon" />
                <input placeholder="Search Twitter" type="text"></input>
            </div>
            <div className="widgets-widget-container">
                <h2>What's happening</h2>
                <p><small>probably not much</small></p>
            </div>
        </div>
    )
}

export default Widgets;