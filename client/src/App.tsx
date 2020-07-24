import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Default } from './pages/Default'
import PrivateRoute from './components/PrivateRoute'
import AuthContext, { Token } from './AuthContext'
import { Callback } from './pages/Callback'

const USER_PROFILE_URI = 'https://api.spotify.com/v1/me/'

function isToken(arg: any): arg is Token {
  return arg && 'access_token' in arg && 'refresh_token' in arg
}

const App = () => {
  const currentToken = localStorage.getItem('token')
  const [token, setToken] = useState(
    currentToken ? JSON.parse(currentToken) : undefined,
  )
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    if (isToken(token)) {
      axios
        .get(USER_PROFILE_URI, {
          headers: {
            Authorization: 'Bearer ' + token.access_token,
          },
        })
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
        })
        .catch((err) => {
          console.error(err.message)
        })
    } else {
      setToken(null)
    }
  }, [token])

  return (
    <Router>
      <AuthContext.Provider
        value={{
          token: token,
          setToken: (token: JSON) => {
            localStorage.setItem('token', JSON.stringify(token))
            setToken(token)
          },
        }}
      >
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/callback" component={Callback} />
            <PrivateRoute component={Default} />
          </Switch>
        </div>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
