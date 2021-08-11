const { REACT_APP_BACKEND_URL, REACT_APP_PUBLIC_URL } = process.env

export const Routes = {
  // App URL
  appUrlBase: REACT_APP_PUBLIC_URL,
  appHome: '/',
  appLogin: '/login',
  appLogout: '/logout',

  // API URI
  apiUrlBase: REACT_APP_BACKEND_URL,
  apiUsers: '/users',
  apiPosts: '/posts',
  apiComments: '/comments'
}
