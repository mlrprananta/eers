import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import { useAuthState } from '../context/AuthContext'
import { useAuth } from '../hooks/useAuth'
import { Loading } from './Loading'

export const Callback: React.FC = (props) => {
  const { login } = useAuth()
  const state = useAuthState()

  useEffect(() => {
    login()
  }, [login])

  return <>{state.token ? <Redirect to="/home" /> : <Loading />}</>
}
