import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ArtistList } from '../components/ArtistList'
import { SongTable } from '../components/table/SongTable'
import axios from 'axios'
import { useAuthState } from '../context/AuthContext'
import { UserDTO } from '../data/dto'
import { Loading } from './Loading'

export const Home: React.FC = () => {
  // const user = useApiRequest<User>('/me')
  const state = useAuthState()
  const [profile, setProfile] = useState<UserDTO>()

  useEffect(() => {
    const fetch = async () => {
      if (state.token) {
        try {
          const response = await axios.put(
            '/api/profile',
            {},
            {
              headers: {
                Authorization: `Bearer ${state.token}`,
              },
            },
          )
          setProfile(response.data)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetch()
  }, [state])

  return (
    <>
      {profile ? (
        <Container fluid>
          <h1>{'Welcome ' + profile.name}</h1>
          <h2>Your favorite artists</h2>
          <ArtistList artists={profile.artists}></ArtistList>
          <h2>Your recent tracks</h2>
          <SongTable tracks={profile.tracks} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
