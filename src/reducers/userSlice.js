import { createSlice } from '@reduxjs/toolkit'
import { FakeAuth as Auth } from './../utils/fakeAuth';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: Auth.getUserProfile(),
    isAuthenticated: Auth.isAuthenticated()
  },
  reducers: {
    authenticate: (state, action) => {
      state.value = action.payload.user
      state.isAuthenticated = action.payload.state
    },
    logout: (state) => {
      state.value = null
      state.isAuthenticated = false
      Auth.logout()
    },
  },
})

export const { authenticate, logout } = userSlice.actions

export const selectedUser = (state) => state.user.value
export const isAuthenticated = (state) => state.user.isAuthenticated

export default userSlice.reducer
