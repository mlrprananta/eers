import React from 'react'
import { Container } from 'react-bootstrap'
import { SongList } from '../components/SongList'
import { User } from '../data/types'
import { useApiRequest } from '../hooks/useSpotifyWebApi'
import { ArtistList } from '../components/ArtistList'

export const Home: React.FC = () => {
  const user = useApiRequest<User>('/me')

  return (
    <Container fluid>
      <h1>{'Welcome ' + (user ? user.display_name : '')}</h1>
      <ArtistList></ArtistList>
      <SongList></SongList>
    </Container>
  )
}
