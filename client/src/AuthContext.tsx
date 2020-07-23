import React from 'react'

const AuthContext = React.createContext({
    token: {},
    setToken: (token: JSON) => {},
})

export default AuthContext
