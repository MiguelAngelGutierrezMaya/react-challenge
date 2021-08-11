import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { selectedUser } from './../../reducers/userSlice'
import { Routes } from './../index';

export const LayoutRoute = ({ children, ...rest }) => {
  const user = useSelector(selectedUser)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user !== null) return <Redirect to={{ pathname: Routes.appHome, state: { from: location } }} />
        return (<>{children}</>)
      }}
    />
  )
}
