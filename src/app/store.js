import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../feature/auth/authSlice'
import pengumumanReducer from '../feature/pengumuman/pengumumanSlice'
import proposalReducer from '../feature/proposal/proposalSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    pengumuman: pengumumanReducer,
    proposal: proposalReducer,
  },
})

export default store
