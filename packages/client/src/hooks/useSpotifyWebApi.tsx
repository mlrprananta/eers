import { useEffect, useState } from 'react'
import { useAuthState, useAuthDispatch } from '../context/AuthContext'
import axios from 'axios'

const WEB_API_URI = 'https://api.spotify.com/v1'

//TODO Fix infinite loop with params in dependency list
export function useApiRequest<T>(url: string, params = {}) {
  const [data, setData] = useState<T>()
  const state = useAuthState()
  const dispatch = useAuthDispatch()

  useEffect(() => {
    const fetchData = async () => {
      if (!state.expired) {
        axios
          .get(WEB_API_URI + url, {
            params: params,
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          })
          .then((response) => {
            setData(response.data)
          })
          .catch((error) => {
            if (
              error.isAxiosError &&
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 403
            ) {
              dispatch({ type: 'EXPIRE' })
            } else {
              throw error
            }
          })
      }
    }

    fetchData()
  }, [url, state, dispatch])

  return data
}
