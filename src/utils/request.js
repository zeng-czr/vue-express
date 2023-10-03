import axios from 'axios'
// import {Message} from 'element-ui'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    console.log(response)
    return response.data

  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default instance