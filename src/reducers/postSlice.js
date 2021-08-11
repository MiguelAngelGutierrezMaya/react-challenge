import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    users: [],
    comments: []
  },
  reducers: {
    setPosts: (state, action) => void (state.posts = action.payload),
    setUsers: (state, action) => void (state.users = action.payload),
    setComments: (state, action) => void (state.comments = action.payload),
    addComment: (state, action) => {
      const comments = [...state.comments]
      comments.push(action.payload)
      state.comments = [...comments]
    }
  },
})

export const { setPosts, setUsers, setComments, addComment } = postSlice.actions

export const listOfPosts = (state) => state.post.posts
export const listOfUsers = (state) => state.post.users
export const listOfComments = (state) => state.post.comments

export default postSlice.reducer
