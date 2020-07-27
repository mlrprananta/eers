import axios from 'axios'

const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export type Token = {
  access_token: string
  refresh_token: string
}

// function isToken(arg: any): arg is Token {
//   return arg && 'access_token' in arg && 'refresh_token' in arg
// }

export async function fetchTokens(params: string) {
  return axios.get(`/api/token${params}`).then((response) => {
    return setTokens(response.data.access_token, response.data.refresh_token)
  })
}

// Refresh token
export async function refresh() {
  return axios
    .post('/api/token', {
      refresh_token: getRefreshToken(),
    })
    .then((response) => {
      console.log(response.data)
      return setAccessToken(response.data.access_token)
    })
}

export function setTokens(accessToken: string, refreshToken: string): string {
  setRefreshToken(refreshToken)
  return setAccessToken(accessToken)
}

export function setAccessToken(token: string): string {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
  return token
}

export function setRefreshToken(token: string) {
  localStorage.setItem(REFRESH_TOKEN_KEY, token)
}

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}
