import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Callback } from '../pages/Callback'
import PrivateRoute from './PrivateRoute'
import { Default } from '../pages/Default'
import { User } from '../pages/User'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/callback" component={Callback} />
      <Route path="/user/:id" component={User} />
      <PrivateRoute component={Default} />
    </Switch>
  )
}
