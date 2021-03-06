export type Artist = {
  id: string
  name: string
  images: { url: string }[]
}

export type Album = {
  album_type: string
  artists: Artist[]
  external_urls: { url: string }[]
  genres: string[]
  id: string
  images?: { url: string }[]
  name: string
  release_date: string
  tracks: Track[]
  uri: string
}

export type Track = {
  artists: Artist[]
  album: Album
  duration_ms: number
  id: string
  linked_from: Track
  name: string
  uri: string
}

export type Playlist = {
  collaborative: boolean
  id: string
  images: { url: string }[]
  name: string
  owner: User
  snapshot_id?: string
  tracks: {
    href: string
  }
}

export type User = {
  display_name?: string
  href: string
  id: string
  type: 'user'
  uri: string
}
