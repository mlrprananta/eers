import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useAuthState } from '../context/AuthContext'

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const state = useAuthState()
  return (
    <Route
      {...rest}
      render={(props) =>
        state.authenticated ? (
          Component ? (
            <Component {...props} />
          ) : null
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}
export default PrivateRoute
