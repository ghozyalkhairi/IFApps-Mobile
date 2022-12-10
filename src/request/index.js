import axios from 'axios'

export const fetchData = async (method, type) => {
  const baseURL = 'http://192.168.1.6:8000/api'
  const options = {
    url: `${baseURL}/${type}`,
    method,
  }
  return await axios.request(options)
}

export const authRegister = async data => {
  const url = 'http://192.168.1.6:8000/api/auth/register'
  const options = {
    url,
    method: 'POST',
    data,
  }
  return await axios.request(options)
}

export const authLogin = async data => {
  const url = 'http://192.168.1.6:8000/api/auth/login'
  const options = {
    url,
    method: 'POST',
    data,
  }
  try {
    return await axios.request(options)
  } catch (err) {
    return err
  }
}
