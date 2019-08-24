import http from './BaseServices';

const create = record =>  http.post('/recording', record).then(r => r.data)

const update = (id, record) => http.put(`/recordings${id}`, record)

const read = credentials => http.post(`/signin`, credentials)//.then(r => r.data)

const destroy = () => http.post(`/logout`)

export default {
  create,
  read,
  update,
  destroy
}
