import React, { Fragment } from 'react'
import { MyNavbar as Navbar } from '../components/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Profile } from './Profile'
import { Home } from './Home'

export const Default: React.FC = () => (
  <Fragment>
    <Navbar />
    <Redirect to="/home" />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/user/:id" children={Profile} />
    </Switch>
  </Fragment>
)
