import axios from 'axios'
import {CURRENT_USER_KEY} from '../contexts/AuthStore'

const http = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  baseURL: 'http://localhost:3001',
  withCredentials: true
});

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem(CURRENT_USER_KEY)
      window.location.assign("/sign-in");
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;