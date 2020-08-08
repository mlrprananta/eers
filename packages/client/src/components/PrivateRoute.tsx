import React, { useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useAuthState } from '../context/AuthContext'
import { useAuth } from '../hooks/useAuth'
import { Spinner } from 'react-bootstrap'

type Props = Required<Pick<RouteProps, 'component'>> & RouteProps

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const state = useAuthState()
  const { refresh } = useAuth()

  useEffect(() => {
    if (!state.authenticated) refresh()
  }, [state, refresh])

  return (
    <Route
      {...rest}
      render={(props) =>
        state.authenticated ? (
          <Component {...props} />
        ) : (
          <div className="parent full">
            <Spinner animation="border" variant="primary" />
          </div>
        )
      }
    />
  )
}
export default PrivateRoute
