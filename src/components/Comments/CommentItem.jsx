import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { deleteCommentQuery } from '../../redux/actions/commentsAC';
import { Button } from '@mui/material';
import Delete from '@mui/icons-material/Delete';

export default function CommentItem({_id}) {
    const dispatch = useDispatch()
    const postId = useParams()
    const comments = useSelector((store) => store.comments)
    const currentComment = comments.find((comment) => comment._id === _id)
  const deleteHandler = () => dispatch(deleteCommentQuery(postId._id, currentComment._id))
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
          {currentComment.author?.name.slice(0, 1)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={currentComment.author?.name}/>
      </ListItem>
      <ListItem >
        <div> {currentComment.text} </div>
        <Button 
          aria-label="delete" 
          onClick={deleteHandler} 
          variant="contained" 
          color="error">
          <Delete />
        </Button>
      </ListItem>
    </List>
  );
}