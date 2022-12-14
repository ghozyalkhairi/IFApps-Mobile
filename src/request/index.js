import axios from 'axios'

export const fetchData = async (method, type) => {
  const baseURL = 'http://10.0.2.2:8000/api'
  const options = {
    url: `${baseURL}/${type}`,
    method,
  }
  try {
    return await axios.request(options)
  } catch (err) {
    return err
  }
}

export const authRegister = async data => {
  const url = 'http://10.0.2.2:8000/api/auth/register'
  const options = {
    url,
    method: 'POST',
    data,
    validateStatus: () => true,
  }
  try {
    return await axios.request(options)
  } catch (err) {
    return err
  }
}

export const authLogin = async data => {
  const url = 'http://10.0.2.2:8000/api/auth/login'
  const options = {
    url,
    method: 'POST',
    data,
    validateStatus: () => true,
  }
  try {
    return await axios.request(options)
  } catch (err) {
    return err
  }
}

export const authLogout = async token => {
  const url = 'http://10.0.2.2:8000/api/auth/logout'
  const options = {
    url,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    validateStatus: () => true,
  }
  try {
    return await axios.request(options)
  } catch (err) {
    return err
  }
}
