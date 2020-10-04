import http from './BaseServices';

const register = user =>  http.post('/register', user)

const authenticate = credentials => http.post(`/signin`, credentials)//.then(r => r.data)

const logout = () => http.post(`/logout`)

export default {
  register,
  authenticate,
  logout,
}
