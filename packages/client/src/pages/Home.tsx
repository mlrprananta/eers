import React from 'react'
import { Container } from 'react-bootstrap'
import { User } from '../data/types'
import { useApiRequest } from '../hooks/useSpotifyWebApi'
import { ArtistList } from '../components/ArtistList'
import { SongTable } from '../components/table/SongTable'
import { Endpoint } from '../api/endpoints'

export const Home: React.FC = () => {
  const user = useApiRequest<User>('/me')

  return (
    <Container fluid>
      <h1>{'Welcome ' + (user ? user.display_name : '')}</h1>
      <h2>Your favorite artists</h2>
      <ArtistList></ArtistList>
      <h2>Your recent tracks</h2>
      <SongTable
        endpoint={Endpoint.TopTracks}
        options={{
          limit: 50,
          time_range: 'short_term',
        }}
      />
    </Container>
  )
}
