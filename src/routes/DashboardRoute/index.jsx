import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * reducers
 */
import { selectedUser } from './../../reducers/userSlice'

/**
 * Routes
 */
import { Routes } from './../index'

export const DashboardRoute = ({ children, hasAuthorization, ...rest }) => {
  const user = useSelector(selectedUser)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (hasAuthorization && user !== null) return (<>{children}</>)
        return <Redirect to={{ pathname: Routes.appLogin, state: { from: location } }} />
      }}
    />
  )
}
