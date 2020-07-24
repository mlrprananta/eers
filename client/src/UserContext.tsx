import React from 'react'
import axios from 'axios'

export const UserContext = React.createContext({
  user: {},
  setUser: (token: JSON) => {},
})
