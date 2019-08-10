import http from './BaseServices';

const create = user =>  http.post('/signup', user)

const read = credentials => http.post(`/signin`, credentials)//.then(r => r.data)

const update = () => http.post(`/logout`)

const destroy = () => http.post(`/logout`)

export default {
  create,
  read,
  update,
  destroy
}
