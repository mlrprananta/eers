import { useAuthDispatch } from '../context/AuthContext'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'

const AUTHORIZE_URI = '/api/authorize'
const TOKEN_URI = '/api/token'

//TODO Fix infinite loop with params in dependency list
export function useAuth() {
  const location = useLocation()
  const history = useHistory()
  //   const state = useAuthState()
  const dispatch = useAuthDispatch()

  const authenticate = () => {
    axios
      .get(AUTHORIZE_URI)
      .then((res) => {
        window.location = res.data
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const login = () => {
    axios
      .get(TOKEN_URI + location.search)
      .then((response) => {
        dispatch({
          type: 'AUTHENTICATE',
          payload: response.data.access_token,
        })
      })
      .catch(() => {
        refresh()
      })
  }

  const refresh = (reroute = true) => {
    axios
      .post(TOKEN_URI)
      .then((response) => {
        dispatch({ type: 'AUTHENTICATE', payload: response.data.access_token })
      })
      .catch(() => {
        if (reroute) reset()
      })
  }

  const reset = () => {
    history.push('/login')
    dispatch({ type: 'RESET' })
  }

  return { authenticate, login, refresh, reset }
}
