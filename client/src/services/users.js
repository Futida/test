import axios from 'axios'
import api from '../constants/api'

export function getUsers () {
  return axios({
    method: 'get',
    url: api.users.get
  })
}

export function deleteUser (id) {
  return axios({
    method: 'get',
    url: api.users.delete(id)
  })
}

export function updateUser (data) {
  return axios({
    method: 'post',
    url: api.users.update(data._id),
    data
  })
}

export function createUser (data) {
  return axios({
    method: 'post',
    url: api.users.create,
    data
  })
}
