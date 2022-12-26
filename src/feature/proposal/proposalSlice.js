import {createSlice} from '@reduxjs/toolkit'
import {getProposal} from './proposalThunks'

const initialState = {
  proposal: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

const proposalSlice = createSlice({
  name: 'proposal',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder =>
    builder
      .addCase(getProposal.pending, state => {
        state.isLoading = true
      })
      .addCase(getProposal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.proposal = action.payload
      })
      .addCase(getProposal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }),
})

export const {reset} = proposalSlice.actions
export const selectProposal = state => state.proposal
export default proposalSlice.reducer
