import axios from './axios'

const getPosts = () => {
    return axios.get('/posts')
}

const requests = {
    getPosts
}

export default requests