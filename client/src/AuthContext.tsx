import React from 'react'

export type Token = {
  access_token: string
  refresh_token: string
}

interface IAuthContextProps {
  token: Token
  setToken: (token: JSON) => void
}

const AuthContext = React.createContext({} as IAuthContextProps)

export default AuthContext
