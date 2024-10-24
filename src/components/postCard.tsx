import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Post } from '@/types/type';
import Button from '@mui/material/Button'
import Link from 'next/link';

// Define the Post type as a prop for the Card component


interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '16px',height:'100%' }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography color="textSecondary" gutterBottom>
          User ID: {post.userId} | Post ID: {post.id}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
        <Link href={`/post/${post.id}`}>
        <Button variant="contained" color="primary">
          Show Details
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostCard;