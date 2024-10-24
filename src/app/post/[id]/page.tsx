import { Post } from '@/types/type';
import { AxiosResponse } from 'axios';
import queryClient from '@/utils/queryClient';
import React from 'react'
import services from '@/services/fetchAPI';
import { Box, Typography } from '@mui/material';

async function SinglePost({params}:any) {
  const { id } = await params
  const postsResponse: AxiosResponse<Post, any> = await services.getPostById(id);

  const post:Post = postsResponse.data; 

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => post  
  });
  return (
    <Box >
      <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1, marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        User ID: {post.userId}
      </Typography>
      <Typography variant="body1">
        {post.body}
      </Typography>
    </Box>
    </Box>
  )
}

export default SinglePost