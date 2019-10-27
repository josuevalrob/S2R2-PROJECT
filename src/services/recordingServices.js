import http from './BaseServices';
const base = '/recording'

const breakStudent = e =>({...e, studentA: e.students[0], studentB: e.students[1]})

//? can include pagination
const getData = () => http.get(`${base}`).then(({data})=> data.map(breakStudent))

const create = record =>  http.post(base, record)

const update = (id, record) => http.put(`${base}/${id}`, record).then(({data})=>breakStudent(data))

const createAudio = (id, audio) => http.put(`${base}/${id}/audio`, audio).then(({data})=>breakStudent(data))

const deleteAudio = (id, audio) => http.put(`${base}/${id}/delete`, audio)

const read = id => http.get(`${base}/${id}`).then(({data})=>breakStudent(data));

const destroy = (id) => http.delete(`${base}/${id}`)

export default {
  create,
  read,
  getData,
  update,
  createAudio,
  destroy,
  deleteAudio
}
