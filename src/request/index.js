import axios from 'axios'

export const fetchData = async (method, type, token) => {
  const baseURL = 'http://103.187.146.183/api'
  const options = {
    url: `${baseURL}/${type}`,
    method,
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

export const authRegister = async data => {
  const url = 'http://103.187.146.183/api/auth/register'
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
  const url = 'http://103.187.146.183/api/auth/login'
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

export const updateUser = async (id, data, token) => {
  const url = `http://103.187.146.183/api/mahasiswa/${id}/update`
  const options = {
    url,
    method: 'PATCH',
    data,
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

export const getUser = async (id, token) => {
  const url = `http://103.187.146.183/api/mahasiswa/${id}/get`
  const options = {
    url,
    method: 'GET',
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

export const authLogout = async token => {
  const url = 'http://103.187.146.183/api/auth/logout'
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
