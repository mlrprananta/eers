import React, { Fragment } from 'react'
import { MyNavbar as Navbar } from '../components/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Profile } from './Profile'
import { Home } from './Home'
import { Tracks } from './Tracks'

export const Default: React.FC = () => (
  <Fragment>
    <Navbar />
    <Redirect to="/home" />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/tracks" component={Tracks} />
      <Route path="/user/:id" children={Profile} />
    </Switch>
  </Fragment>
)
