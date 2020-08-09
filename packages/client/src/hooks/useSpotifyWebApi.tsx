import { useEffect, useState } from 'react'
import { useAuthState } from '../context/AuthContext'
import axios, { AxiosError } from 'axios'
import { useAuth } from './useAuth'

const WEB_API_URI = 'https://api.spotify.com/v1'

interface Options {
  limit?: number
  time_range?: 'short_term' | 'medium_term' | 'long_term'
}

export function useApiRequest<T>(url: string, options?: Options) {
  const [data, setData] = useState<T>()
  const [_options] = useState<Options>(options || {})
  const state = useAuthState()
  const { clear } = useAuth()

  useEffect(() => {
    if (state.authenticated) {
      axios
        .get(WEB_API_URI + url, {
          params: _options,
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then((response) => {
          setData(response.data)
        })
        .catch((error: AxiosError) => {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 403
          ) {
            clear()
          } else {
            throw error
          }
        })
    }
  }, [clear, _options, state, url])

  return data
}
