import React from 'react'
import { MyNavbar as Navbar } from '../components/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Home } from './Home'

export const Default: React.FC = () => (
  <>
    <Navbar />
    <Redirect to="/home" />
    <Switch>
      <Route path="/home" component={Home} />
      {/* <Route path="/tracks" component={Tracks} /> */}
      {/* <Route path="/user/:id" children={Profile} /> */}
    </Switch>
  </>
)
