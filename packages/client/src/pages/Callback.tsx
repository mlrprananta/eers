import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import { useAuthState } from '../context/AuthContext'
import { useAuth } from '../hooks/useAuth'
import { Spinner } from 'react-bootstrap'

export const Callback: React.FC = (props) => {
  const { login } = useAuth()
  const state = useAuthState()

  useEffect(() => {
    login()
  }, [login])

  return (
    <div className="parent full">
      {state.token ? (
        <Redirect to="/home" />
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  )
}
