import React, { useEffect, Fragment } from 'react'
import * as service from '../api/tokenService'

import { useLocation, Redirect, useHistory } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../context/AuthContext'

export const Callback: React.FC = (props) => {
  const location = useLocation()
  const history = useHistory()

  const state = useAuthState()
  const dispatch = useAuthDispatch()
  // const { setToken } = useAuth()

  useEffect(() => {
    service
      .fetchTokens(location.search)
      .then((token) => {
        dispatch({ type: 'AUTHENTICATE', payload: token })
      })
      .catch((error) => {
        history.push('/login')
        console.error(error)
        service.clearTokens()
        dispatch({ type: 'RESET' })
      })
  })

  return (
    <Fragment>{state.authenticated ? <Redirect to="/home" /> : null}</Fragment>
  )
}
