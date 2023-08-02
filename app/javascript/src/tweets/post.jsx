import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Button } from "@mui/material";
import ToggleIcon from "./toggleIcon";
import DeleteButton from "./deleteButton";

const Post = ({ id, username, email, verified, message, created_at, avatar }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleDelete = () => {
    // Implement the delete functionality here
    console.log("Deleting tweet...");
  };

  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              <a href={`/tweets/${username}`}>{username}{" "}</a> 
							<span className="post-header-special">
								<VerifiedIcon className="post-badge" /> 
								{email}
							</span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>{message}</p>
          </div>
          <div className="post-header-date">
            <p>{created_at}</p> 
          </div>    
          <div className="post-footer">
						<Button>
            	<ChatBubbleOutlineIcon className="post-comment" fontSize="small" />
						</Button>
						<Button>
            	<RepeatIcon  className="post-retweet" fontSize="small" />
						</Button>
            <ToggleIcon isLiked={isLiked} setIsLiked={setIsLiked} />
            <DeleteButton onDelete={handleDelete} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;