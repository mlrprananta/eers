import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute: React.FC<RouteProps> = ({
    component: Component,
    ...rest
}) => {
    const isAuthenticated = useAuth().token
    console.log(isAuthenticated)
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
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
