import {createAsyncThunk} from '@reduxjs/toolkit'
import {
  authLogin,
  authRegister,
  authLogout,
  updateUser,
  getUser,
} from '../../request'

export const login = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    const {email, password} = payload
    const response = await authLogin({email, password})
    if (response.data.status) {
      return {
        ...response.data.user,
        token: response.data.token,
      }
    }
    return thunkAPI.rejectWithValue(response.data.message)
  },
)

export const register = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    const {email, password, name} = payload
    const response = await authRegister({email, password, name})
    if (response.data.status) {
      return response.data.user
    }
    return thunkAPI.rejectWithValue(response.data.message)
  },
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, thunkAPI) => {
    const {token} = payload
    const response = await authLogout(token)
    if (response.data.meta.status === 'success') {
      return response.data.data
    }
    return thunkAPI.rejectWithValue(response.data.message)
  },
)

export const update = createAsyncThunk(
  'auth/update',
  async (payload, thunkAPI) => {
    const {id, data, token} = payload
    const response = await updateUser(id, data, token).then(() =>
      getUser(id, token),
    )
    if (response.data.meta.status === 'success') {
      return response.data.data
    }
    return thunkAPI.rejectWithValue(response.data.message)
  },
)
