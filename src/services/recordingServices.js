import http from './BaseServices';
const base = '/recording'
const create = record =>  http.post(base, record)

const update = (id, record) => http.put(`${base}/${id}`, record)

const read = id => http.get(`${base}/${id}`).then(r => {
  const {data} = r
  return {...data, studentA: data.students[0], studentB: data.students[1]}
})

const destroy = () => http.post(`/logout`)

export default {
  create,
  read,
  update,
  destroy
}
