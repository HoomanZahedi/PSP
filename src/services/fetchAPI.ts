import { AxiosResponse } from 'axios';
import axios from './axios'
import { GetPostsType, Post } from '@/types/type';

const getPosts: GetPostsType = () => {
    return axios.get<Post[]>('/posts');
  }
const requests = {
    getPosts
}

export default requests