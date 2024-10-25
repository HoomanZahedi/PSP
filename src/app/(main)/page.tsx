import { dehydrate } from '@tanstack/react-query';
import queryClient from '@/utils/queryClient';
import services from '@/services/fetchAPI';
import { Post } from '@/types/type';
import { AxiosResponse } from 'axios';
import PostCard from '@/components/postCard';
import {  Grid2, Typography } from '@mui/material';

export default async function PostsPage() {
  const postsResponse: AxiosResponse<Post[], any> = await services.getPosts();

  const posts:Post[] = postsResponse.data; 

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => posts,  
  });

  return (
    <div>
      <Typography variant='h3'>Posts</Typography>
      <Grid2 container spacing={2}>
        {posts.map((post) => (
          <Grid2 key={post.id} size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column' }}>
            <PostCard  post={post} /> 
          </Grid2 >
        ))}
      </Grid2>
    </div>
  );
}
