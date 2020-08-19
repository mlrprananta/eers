import React from 'react'
import AuthProvider from './context/AuthContext'
import { Routes } from './components/Routes'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className="App bg-light">
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Footer></Footer>
    </div>
  )
}

export default App
