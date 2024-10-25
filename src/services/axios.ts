import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {toast} from 'react-toastify'
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config: any): any => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    // Handle the request error
    console.error('Request error: '+ error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Unauthorized, redirecting...');
        window.location.href = '/login';
      }
    } else if (error.request) {
        console.error('No response received: ', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error setting up request: '+ error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;