import React, { useEffect, Fragment } from 'react'

import { useLocation, Redirect, useHistory } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../context/AuthContext'
import { fetchTokens, clearTokens } from '../api/tokenService'

export const Callback: React.FC = (props) => {
  const location = useLocation()
  const params = location.search
  const history = useHistory()

  const state = useAuthState()
  const dispatch = useAuthDispatch()

  useEffect(() => {
    fetchTokens(params)
      .then((token) => {
        dispatch({ type: 'AUTHENTICATE', payload: token })
      })
      .catch((error) => {
        history.push('/login')
        console.error(error)
        clearTokens()
        dispatch({ type: 'RESET' })
      })
  }, [dispatch, history, params])

  return (
    <Fragment>{state.authenticated ? <Redirect to="/home" /> : null}</Fragment>
  )
}
