import { AxiosResponse } from 'axios';
import axios from './axios'
import { GetPostsType, GetSinglePostType, Post } from '@/types/type';

const getPosts: GetPostsType = () => {
    return axios.get<Post[]>('/posts');
}

const getPostById: GetSinglePostType = (id:number) => {
    return axios.get<Post>(`/posts/${id}`);
}
const requests = {
    getPosts,
    getPostById
}

export default requests