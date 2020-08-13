import React, { useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useAuthState } from '../context/AuthContext'
import { useAuth } from '../hooks/useAuth'
import { Spinner } from 'react-bootstrap'

type Props = Required<Pick<RouteProps, 'component'>> & RouteProps

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const state = useAuthState()
  const { refresh, logout } = useAuth()

  useEffect(() => {
    if (!state.token) {
      refresh().catch((error) => {
        logout()
      })
    }
  }, [state, refresh, logout])

  return (
    <Route
      {...rest}
      render={(props) =>
        state.token ? (
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
