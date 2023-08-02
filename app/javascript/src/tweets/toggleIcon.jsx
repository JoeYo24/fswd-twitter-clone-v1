import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';

const ToggleIcon = ({ isLiked, setIsLiked }) => {
    const handleIconClick = () => {
      setIsLiked((prevState) => !prevState);
    };
  
    return (
      <Button className="post-like" onClick={handleIconClick}>
        {isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
      </Button>
    );
};

export default ToggleIcon;
  