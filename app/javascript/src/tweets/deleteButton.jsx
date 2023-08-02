import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { safeCredentials, authenticityHeader } from '../utils/fetchHelper';

const DeleteButton = ({ onDelete, id }) => {
    const handleDelete = () => {
        fetch(`/api/tweets/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...authenticityHeader(),
            ...safeCredentials(),
        },
        body: JSON.stringify({ id: id }),
        })
        .then((response) => {
        if (response.ok) {
            console.log('Tweet deleted');
            onDelete();
            window.location.reload();
        } else {
            console.error('Tweet deletion failed:', response);
        }
        })
        .catch((error) => {
        console.error('Tweet deletion error:', error);
        });
    };

    return (
        <Button className="post-delete" onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
        </Button>
    );
};
  
export default DeleteButton;