import React, { useState, useEffect } from "react";
import Post from "@src/tweets/post";
import { safeCredentials, authenticityHeader } from "../utils/fetchHelper";

const UserFeed = ({ username }) => {
  const [userTweets, setUserTweets] = useState([]);
  const [user, setUser] = useState({});

  const fetchUserTweets = async () => {
    try {
      const response = await fetch(`/api/users/${username}/tweets`, {
        method: "GET",
        headers: {
          ...safeCredentials(),
          ...authenticityHeader(),
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserTweets(data.tweets);
      } else {
        console.error("Error fetching tweets:", response.status);
      }
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  useEffect(() => {
    fetchUserTweets();
  }, [username]);

  return (
    <div className="userFeed">
      <div className="userFeed-header">
        <h2>Tweets</h2>
      </div>
      <div className="userFeed-sort">
        {Array.isArray(userTweets) && userTweets.length > 0 ? (
          userTweets.map((tweet) => (
            <Post
              id={tweet.id}
              key={tweet.id}
              username={tweet.username}
              email={tweet.email}
              message={tweet.message}
              created_at={tweet.created_at}
            />
          ))
        ) : (
          <p>No tweets found</p>
        )}
      </div>
    </div>
  );
};

export default UserFeed;
