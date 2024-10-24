import { dehydrate } from '@tanstack/react-query';
import queryClient from '@/utils/queryClient';
import services from '@/services/fetchAPI';

export default async function PostsPage() {
  const postsResponse = await services.getPosts();

  const posts = postsResponse.data; 

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => posts,  
  });

  return (
    <div>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
