import React from "react";
import ReactDOM from "react-dom";
import Tweets from "./tweets";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Tweets />,
        document.body.appendChild(document.createElement("div"))
    );
});