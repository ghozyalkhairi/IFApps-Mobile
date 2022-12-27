import {createSlice} from '@reduxjs/toolkit'
import {getPengumuman} from './pengumumanThunks'
import {logout} from '../auth/authThunks'

const initialState = {
  pengumuman: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const pengumumanSlice = createSlice({
  name: 'pengumuman',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder =>
    builder
      .addCase(getPengumuman.pending, state => {
        state.isLoading = true
      })
      .addCase(getPengumuman.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pengumuman = action.payload
      })
      .addCase(getPengumuman.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(logout.fulfilled, state => initialState),
})

export const selectPengumuman = state => state.pengumuman
export const {reset} = pengumumanSlice.actions
export default pengumumanSlice.reducer
