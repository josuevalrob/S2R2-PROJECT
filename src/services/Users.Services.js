import http from './BaseServices';
const base = '/user'

//? can include pagination
const getData = () =>
  http.get(`${base}`)
    .then(({data})=> data)
    .catch(er => {
      return [{
        error: er.response ? er.response.data.message : er.message
      }]
    })

const update = id => user => http.put(`${base}/${id}`, user).then(({data})=>data)

const read = id => http.get(`${base}/${id}`).then(({data})=>data);

const destroy = (id) => http.delete(`${base}/${id}`)

export default {
  read,
  getData,
  update,
  destroy,
}
