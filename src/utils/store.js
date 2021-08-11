import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/userSlice'
import postSlice from '../reducers/postSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    post: postSlice
  },
})
