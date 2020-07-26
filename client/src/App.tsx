import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Default } from './pages/Default'
import PrivateRoute from './components/PrivateRoute'
import { Callback } from './pages/Callback'
import AuthProvider from './context/AuthContext'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/callback" component={Callback} />
            {/* <ClientProvider> */}
            <PrivateRoute component={Default} />
            {/* </ClientProvider> */}
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
