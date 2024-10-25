import queryClient from '@/utils/queryClient';
import services from '@/services/fetchAPI';
import { Post } from '@/types/type';
import { AxiosResponse } from 'axios';
import PostCard from '@/components/postCard';
import {  Box, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default async function List() {
  const postsResponse: AxiosResponse<Post[], any> = await services.getPosts();

  const posts:Post[] = postsResponse.data; 

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => posts,  
  });

  return (
      <Box sx={{ padding: 2, display:'flex',alignItems:'center',flexDirection:'column' }}>
      <Typography variant='h3' gutterBottom>Posts</Typography>
      <TableContainer component={Paper} sx={{width:'70%', maxHeight:'80vh'}}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">User ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell component="th" scope="row">{post.id}</TableCell>
                <TableCell>{post.userId}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
