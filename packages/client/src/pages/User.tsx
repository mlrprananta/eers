import React, { useEffect, useState } from 'react'

import { RouteComponentProps } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { ArtistList } from '../components/ArtistList'
import { SongTable } from '../components/table/SongTable'
import { UserDTO } from '../data/dto'
import { Loading } from './Loading'
import { ShareNavbar } from '../components/ShareNavbar'
import { ArtistListExtended } from '../components/ArtistListExtended'

type Props = {
  id: string
}

export const User: React.FC<RouteComponentProps<Props>> = (props) => {
  const [id] = useState<string>(props.match.params.id)
  const [profile, setProfile] = useState<UserDTO>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('/api/profile/' + id)
        setProfile(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [id])

  return (
    <>
      <ShareNavbar />
      {profile ? (
        <Container fluid>
          <h1>{profile.name}</h1>
          <h2>Favorite artists</h2>
          <ArtistListExtended artists={profile.artists}></ArtistListExtended>
          <h2>Recent tracks</h2>
          <SongTable tracks={profile.tracks} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
