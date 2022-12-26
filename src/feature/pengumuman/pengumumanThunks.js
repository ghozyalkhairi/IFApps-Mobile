import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchData} from '../../request'

export const getPengumuman = createAsyncThunk(
  'pengumuman/get',
  async (payload, thunkAPI) => {
    try {
      const response = await fetchData('GET', 'pengumuman', payload.token)
      return response.data.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  },
)
