import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Callback } from '../pages/Callback'
import PrivateRoute from './PrivateRoute'
import { Default } from '../pages/Default'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/callback" component={Callback} />
      <PrivateRoute component={Default} />
    </Switch>
  )
}
