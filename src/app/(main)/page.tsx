import React, { useEffect, useState } from 'react';
import queryClient from '@/utils/queryClient';
import services from '@/services/fetchAPI';
import { Post } from '@/types/type';
import axios, { AxiosResponse } from 'axios';
import PostCard from '@/components/postCard';
import {Grid2, Typography } from '@mui/material';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response: AxiosResponse<Post[]> = await services.getPosts();
        setPosts(response.data);

        await queryClient.prefetchQuery({
          queryKey: ['data'],
          queryFn: () => response.data,
        });

      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>Posts</Typography>
      <Grid2 container spacing={2}>
        {posts.map((post) => (
          <Grid2 key={post.id} size={{ xs: 12, md: 4 }}  sx={{ display: 'flex', flexDirection: 'column' }}>
            <PostCard post={post} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default PostsPage;