import { dehydrate } from '@tanstack/react-query';
import queryClient from '@/utils/queryClient';
import services from '@/services/fetchAPI';
import { Post } from '@/types/type';
import { AxiosResponse } from 'axios';
import PostCard from '@/components/postCard';

export default async function PostsPage() {
  const postsResponse: AxiosResponse<Post[], any> = await services.getPosts();

  const posts:Post[] = postsResponse.data; 

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => posts,  
  });

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} /> 
      ))}
    </div>
  );
}
