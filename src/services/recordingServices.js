import http from './BaseServices';
const base = '/recording'

const breakStudent = e => {
  return ({
    ...e,
    studentA: e.students[0],
    studentB: e.students[1],
    labels: e.participants.map(({name}) => name)
  })
}

//? can include pagination
const getData = () =>
  http.get(`${base}`)
    .then(({data})=> data.map(breakStudent))
    .catch(er => {
      return [{
        error: er.response ? er.response.data.message : er.message
      }]
    })

const create = record =>  http.post(base, record).then(({data})=>breakStudent(data))

const update = (id, record) => http.put(`${base}/${id}`, record).then(({data})=>breakStudent(data))


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
  destroy,
  singleAudio,
  deleteSingleAudio,
  deleteAudio
}
