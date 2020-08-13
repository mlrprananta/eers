import { Track, Artist } from './types'

export type UserDTO = {
  id: number
  name: string
  tracks: Track[]
  artists: Artist[]
}
