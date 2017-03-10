import axios from 'axios'

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response?.data?.data,
  (error) => Promise.reject(error)
)
