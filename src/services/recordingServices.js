import http from './BaseServices';
const base = '/recording'

const breakStudent = e =>({...e, studentA: e.students[0], studentB: e.students[1]})

//? can include pagination
const getData = () =>
  http.get(`${base}`)
    .then(({data})=> data.map(breakStudent))
    .catch(er => {
      console.error(er.response);
      return [{error:er.response.data.message}]
    })

const create = record =>  http.post(base, record)

const update = (id, record) => http.put(`${base}/${id}`, record).then(({data})=>breakStudent(data))

const createAudio = (id, audio) => http.put(`${base}/${id}/create`, audio).then(({data})=>breakStudent(data))

const singleAudio = (id, audio) => http.put(`${base}/${id}/single`, audio).then(({data})=>breakStudent(data))

const deleteSingleAudio = (id, audio) => http.put(`${base}/${id}/singleDelete`, audio)

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
  singleAudio,
  deleteSingleAudio,
  deleteAudio
}
