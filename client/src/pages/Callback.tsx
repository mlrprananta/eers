import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import { useLocation, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Callback: React.FC = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const location = useLocation()
  const { token, setToken } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) {
      axios.get(`/api/callback${location.search}`).then((res) => {
        if (res.status === 200) {
          setToken(res.data)
          setLoggedIn(true)
        }
      })
    }
  }, [isLoggedIn])

  return <Fragment>{isLoggedIn ? <Redirect to="/home" /> : null}</Fragment>
}
