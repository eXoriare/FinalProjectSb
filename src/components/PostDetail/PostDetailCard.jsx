import * as React from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, CardContent, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { usePostsDetailContext } from "./PostDetail";
import Comments from "../Comments/Comments"



const PostDetailCard = () => {

  const navigate = useNavigate();

  const { post, openModal } = usePostsDetailContext();

  const date = new Date(post.created_at).toLocaleString()

  return (
		<Grid item direction='column' xs={6}>
		
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post?.author?.name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
					{/* {description} */}
        </Typography>
      </CardContent>
        
        <Button>Add Comment</Button>
        
      
          <Typography paragraph>
						{post.text}
          </Typography>
         
          <Button type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={() => navigate(-1)} >
                Go back
          </Button>
        <Button type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={openModal}>
                Edit
         </Button>
        <hr />
      <Comments />
    </Card>
		</Grid>
  );
};

export default PostDetailCard;
