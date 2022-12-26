import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchData} from '../../request'

export const getProposal = createAsyncThunk(
  'proposal/get',
  async (payload, thunkAPI) => {
    try {
      const response = await fetchData('GET', 'proposal', payload.token)
      return response.data.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  },
)
