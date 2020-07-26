import React, { useReducer, useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'
import { useAuthState, useAuthDispatch } from './AuthContext'
import * as service from '../api/tokenService'

const ClientContext = React.createContext<AxiosInstance | undefined>(undefined)

const API_URI = 'https://api.spotify.com/v1'

function createInstance() {
  return axios.create({
    baseURL: API_URI,
    headers: {
      Authorization: 'Bearer ' + service.getAccessToken(),
    },
  })
}

const ClientProvider: React.FC = (props) => {
  const [client, setClient] = useState<AxiosInstance>(createInstance())
  const authState = useAuthState()

  useEffect(() => {
    setClient(createInstance())
  }, [authState])

  return (
    <ClientContext.Provider value={client}>
      {props.children}
    </ClientContext.Provider>
  )
}

export const useClient = () => {
  const context = React.useContext(ClientContext)
  if (context === undefined) {
    throw new Error()
  }
  return context
}

export default ClientProvider
