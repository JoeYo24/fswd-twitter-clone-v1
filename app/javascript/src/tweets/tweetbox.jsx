import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { safeCredentials, handleErrors, authenticityHeader } from "../utils/fetchHelper";

const TweetBox = () => {
    const [message, setMessage] = useState('');

    const postTweet = (e) => {
        e.preventDefault(); // Prevent form submission
      
        fetch('/api/tweets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...safeCredentials(),
            ...authenticityHeader(),
          },
          body: JSON.stringify({
            tweet: { message: message }, // Include the tweet parameter with the message
          }),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Tweet successful: ' + response.statusText);
              setMessage('');
              window.location.reload();
            } else {
              handleErrors(response);
            }
          })
          .catch((error) => {
            console.error('Tweet error:', error);
          });
      };
      

    const handleChange = (e) => {
        setMessage(e.target.value); // Update the state with the input value
    };

    return (
        <div className="tweetbox">
        <form>
            <div className="tweetbox-input">
            <Avatar />
            <input
                placeholder="What's happening?"
                value={message}
                onChange={handleChange}
                type="text"
            />
            </div>
            <Button className="tweetbox-button" onClick={(e) => postTweet(e, message)}>
            Tweet
            </Button>
        </form>
        </div>
    );
};

export default TweetBox;  