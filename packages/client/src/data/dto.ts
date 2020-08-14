import { Track, Artist } from './types'

export type UserDTO = {
  id: string
  name: string
  tracks: Track[]
  artists: Artist[]
}
