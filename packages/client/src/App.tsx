import React from 'react'
import AuthProvider from './context/AuthContext'
import { Routes } from './components/Routes'

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  )
}

export default App
