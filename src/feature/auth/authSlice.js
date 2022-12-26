import {createSlice} from '@reduxjs/toolkit'
import {login, register, logout, update} from './authThunks'

const initialState = {
  user: {
    name: '',
    email: '',
    id: '',
    token: '',
    isLoggedIn: false,
  },
  isLoading: {
    login: false,
    register: false,
    logout: false,
    update: false,
  },
  isSuccess: {
    login: false,
    register: false,
    logout: false,
    update: false,
  },
  isError: {
    login: false,
    register: false,
    logout: false,
    update: false,
  },
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = initialState.isLoading
      state.isSuccess = initialState.isSuccess
      state.isError = initialState.isError
      state.message = initialState.message
    },
  },
  extraReducers: builder =>
    builder
      .addCase(login.pending, state => {
        state.isLoading.login = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading.login = false
        state.isSuccess.login = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading.login = false
        state.isError.login = true
        state.message = action.payload
      })
      .addCase(register.pending, state => {
        state.isLoading.register = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading.register = false
        state.isSuccess.register = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading.register = false
        state.isError.register = true
        state.message = action.payload
      })
      .addCase(logout.pending, state => {
        state.isLoading.logout = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading.logout = false
        state.isSuccess.logout = true
        state.isError.logout = false
        state.user = initialState.user
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading.logout = false
        state.isError.logout = true
        state.message = action.payload
      })
      .addCase(update.pending, state => {
        state.isLoading.update = true
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading.update = false
        state.isSuccess.update = true
        state.user = {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        }
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading.update = false
        state.isError.update = true
        state.message = action.payload
      }),
})

export const selectAuth = state => state.auth
export const {reset} = authSlice.actions
export default authSlice.reducer
