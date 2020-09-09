import axios from 'axios'
import {CURRENT_USER_KEY} from '../contexts/AuthStore'
const http = axios.create({
  //! 💩
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, 
  dataType: 'jsonp',
});
http.interceptors.response.use(
  response => response,
  error => {
    // ! handle de error sin response(?). 
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem(CURRENT_USER_KEY)
      const signInRoute = `${process.env.REACT_APP_BASE_URL}/sign-in`
      window.location.assign(signInRoute);
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;