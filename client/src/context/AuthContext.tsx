import React, { useReducer, useEffect, useState } from 'react'
import * as service from '../api/tokenService'

type Action =
  | { type: 'AUTHENTICATE'; payload: string }
  | { type: 'EXPIRE' }
  | { type: 'REFRESH'; payload: string }
  | { type: 'RESET' }
type Dispatch = (action: Action) => void
type State = {
  expired: boolean
  authenticated: boolean
  token: string
}

const AuthStateContext = React.createContext<State | undefined>(undefined)
const AuthDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        ...state,
        authenticated: true,
        token: action.payload,
      }
    case 'EXPIRE':
      return {
        ...state,
        expired: true,
      }
    case 'REFRESH':
      return {
        ...state,
        expired: false,
        // authenticated: true,
        token: action.payload,
      }

    case 'RESET':
      return {
        ...state,
        expired: false,
        authenticated: false,
      }
    default:
      throw new Error()
  }
}

const AuthProvider: React.FC = (props) => {
  const currentToken = service.getAccessToken()
  const [fetching, setFetching] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    expired: false,
    authenticated: currentToken !== null,
    token: currentToken ? currentToken : '',
  })

  useEffect(() => {
    const callback = async () => {
      if (state.expired && !fetching) {
        setFetching(true)
        service
          .refresh()
          .then((token) => {
            dispatch({ type: 'REFRESH', payload: token })
            setFetching(false)
          })
          .catch((error) => {
            console.error(error)
            service.clearTokens()
            setFetching(false)
            dispatch({ type: 'RESET' })
          })
      }
    }
    callback()
  }, [state, fetching])

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error()
  }
  return context
}

export const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error()
  }
  return context
}

export default AuthProvider
