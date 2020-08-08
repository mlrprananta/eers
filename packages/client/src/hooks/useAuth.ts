import { useAuthDispatch } from '../context/AuthContext'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

const AUTHORIZE_URI = '/api/authorize'
const TOKEN_URI = '/api/token'

export function useAuth() {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useAuthDispatch()

  const authenticate = () => {
    axios
      .get(AUTHORIZE_URI)
      .then((response) => {
        window.location = response.data
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const clear = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [dispatch])

  const logout = useCallback(() => {
    history.push('/login')
    clear()
  }, [clear, history])

  const refresh = useCallback(() => {
    axios
      .post(TOKEN_URI)
      .then((response) => {
        dispatch({ type: 'AUTHENTICATE', payload: response.data.access_token })
      })
      .catch(() => {
        logout()
      })
  }, [dispatch, logout])

  const login = useCallback(() => {
    axios
      .get(TOKEN_URI + location.search)
      .then((response) => {
        console.log('success')
        dispatch({
          type: 'AUTHENTICATE',
          payload: response.data.access_token,
        })
      })
      .catch(() => {
        console.log('failure')
        refresh()
      })
  }, [dispatch, location, refresh])

  return { authenticate, login, refresh, clear, logout }
}
