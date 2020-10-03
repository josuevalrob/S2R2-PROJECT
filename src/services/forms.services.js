import http from './BaseServices';
const base = '/user'

const update = tail => id => user => http.put(`${base}/${id}/${tail}`, user).then(({data})=>data)

const read = tail => id => http.get(`${base}/${id}/${tail}`).then(({data})=>data);

export default {
  readElf: read('elf'),
  updateElf: update('elf'),
  readEmotion: read('emotions'),
  updateEmotion: update('emotions'),
  readStr: stg => read(`strategy/${stg}`),
  updateStr: stg => update(`strategy/${stg}`),
}
