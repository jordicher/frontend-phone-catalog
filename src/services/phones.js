import axios from 'axios'

const APIURL =
  process.env.NODE_ENV === 'test'
    ? 'http://localhost:4002/phones'
    : 'https://db-phone-catalog.herokuapp.com/phones'

export const URLIMG =
  process.env.NODE_ENV === 'test'
    ? 'http://localhost:4002/static/img/'
    : 'https://db-phone-catalog.herokuapp.com/static/img/'

const getAll = () => {
  const request = axios.get(APIURL)
  return request.then((response) => response).catch((error) => error)
}

const getOne = (id) => {
  const request = axios.get(`${APIURL}/${id}`)
  return request.then((response) => response).catch((error) => error)
}

const create = (newPhone) => {
  const request = axios.post(APIURL, newPhone)
  return request.then((response) => response).catch((error) => error)
}

const createImg = (img) => {
  const request = axios.post(`${APIURL}/upload`, img, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return request.then((response) => response).catch((error) => error)
}

const edit = (id, editPhone) => {
  const request = axios.put(`${APIURL}/${id}`, editPhone)
  return request.then((response) => response).catch((error) => error)
}

const remove = async (id) => {
  const request = axios.delete(`${APIURL}/${id}`)
  return request.then((response) => response).catch((error) => error)
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAll,
  getOne,
  create,
  createImg,
  edit,
  remove
}
