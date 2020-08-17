import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { ArtistList } from '../components/ArtistList'
import { SongTable } from '../components/table/SongTable'
import axios from 'axios'
import { useAuthState } from '../context/AuthContext'
import { UserDTO } from '../data/dto'
import { Loading } from './Loading'
import { ShareModal } from '../components/ShareModal'
import { ArtistListExtended } from '../components/ArtistListExtended'

export const Home: React.FC = () => {
  // const user = useApiRequest<User>('/me')
  const state = useAuthState()
  const [profile, setProfile] = useState<UserDTO>()
  const [show, setShow] = useState(false)

  const share = async (id: string) => {
    try {
      // if (navigator.share !== undefined) {
      await navigator.share({
        title: 'eers.herokuapp.com',
        text: "What I've been listening.",
        url: 'user/' + id,
      })
      // }
    } catch (error) {}
  }

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
        <>
          <Container fluid>
            <span>
              <h1>
                {'Welcome ' + profile.name + ' '}
                <Button
                  variant="primary"
                  onClick={() =>
                    navigator.share !== undefined
                      ? share(profile.id)
                      : setShow(true)
                  }
                >
                  Share
                </Button>
              </h1>
            </span>
            <h2>Your favorite artists</h2>
            {/* <ArtistList artists={profile.artists}></ArtistList> */}
            <ArtistListExtended artists={profile.artists}></ArtistListExtended>
            <h2>Your recent tracks</h2>
            <SongTable tracks={profile.tracks} />
          </Container>
          <ShareModal
            id={profile.id}
            show={show}
            onHide={() => setShow(false)}
          ></ShareModal>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
