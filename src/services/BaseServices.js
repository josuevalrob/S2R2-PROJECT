import axios from 'axios'
import {CURRENT_USER_KEY} from '../contexts/AuthStore'
const {NODE_ENV, REACT_APP_API_URL, REACT_APP_DEV_API, REACT_APP_DEV_BASE_URL, REACT_APP_PRO_BASE_URL} = process.env 
const isDev = () => NODE_ENV === "development";
const http = axios.create({
  baseURL: isDev() ? REACT_APP_DEV_API : REACT_APP_API_URL,
  withCredentials: true, 
  dataType: 'jsonp',
});
http.interceptors.response.use(
  response => response,
  error => {
    // ! handle de error sin response(?).
    if (error.response.status === 403) {
      localStorage.removeItem(CURRENT_USER_KEY)
      const baseRoute = isDev() ? REACT_APP_DEV_BASE_URL : REACT_APP_PRO_BASE_URL;
      window.location.assign(`${baseRoute}/sign-in`);
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;