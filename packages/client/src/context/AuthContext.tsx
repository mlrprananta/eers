import React, { useReducer } from 'react'

type Action = { type: 'AUTHENTICATE'; payload: string } | { type: 'RESET' }
type Dispatch = (action: Action) => void
type State = {
  token: string
}

const AuthStateContext = React.createContext<State | undefined>(undefined)
const AuthDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        token: action.payload,
      }
    case 'RESET':
      return {
        token: '',
      }
    default:
      throw new Error('Invalid auth state')
  }
}

const AuthProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    token: '',
  })

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
