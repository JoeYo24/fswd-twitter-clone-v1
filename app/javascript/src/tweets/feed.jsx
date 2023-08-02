import React, { useState, useEffect } from "react";
import TweetBox from "./tweetbox";
import Post from "./post";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import { authenticityHeader, safeCredentials, getAuthenticityToken } from "../utils/fetchHelper";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/tweets', safeCredentials(), {
        method: 'GET',
        headers: authenticityHeader(),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.tweets)
        setTweets(data.tweets);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.log('Error fetching tweets:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  async function handleLogout() {
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const response = await fetch('/api/sessions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
          'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include', // Include cookies for Rails to identify the session
      });
  
      if (response.ok) {
        // Successful logout, you can redirect to the login page or do other actions
        window.location.href = '/login'; // Redirect to the login page after logout
      } else {
        // Handle the case where the logout request was not successful
        console.error('Logout failed:', response.status, response.statusText);
        // You can display an error message to the user if needed.
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
      // Handle any other errors that might occur during the logout process.
      // You can display an error message to the user if needed.
    }
  }
     
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <Button className="feed-header-logout" onClick={handleLogout}>
          <LogoutIcon />
        </Button>
      </div>
      <TweetBox />
      
      {Array.isArray(tweets) && tweets.length > 0 ? (
        tweets.map((tweet) => (
          <Post
            id = {tweet.id}
            key={tweet.id}
            username={tweet.username}
            email={tweet.email}
            message={tweet.message}
            created_at={tweet.created_at}
          />  
        ))
      ) : (
        <p>No tweets found.</p>
      )}
    </div>
  );
};

export default Feed;