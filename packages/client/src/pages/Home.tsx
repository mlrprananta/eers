import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { SongTable } from '../components/table/SongTable'
import axios from 'axios'
import { useAuthState } from '../context/AuthContext'
import { UserDTO } from '../data/dto'
import { Loading } from './Loading'
import { ShareModal } from '../components/ShareModal'
import { ArtistListExtended } from '../components/ArtistListExtended'
import styles from './Page.module.css'
import { ProfileSummary } from '../components/ProfileSummary'
import { SongList } from '../components/SongList'

export const Home: React.FC = () => {
  // const user = useApiRequest<User>('/me')
  const state = useAuthState()
  const [profile, setProfile] = useState<UserDTO>()
  const [show, setShow] = useState(false)

  const share = async (id: string) => {
    try {
      await navigator.share({
        title: 'eers.herokuapp.com',
        text: "What I've been listening.",
        url: 'user/' + id,
      })
    } catch (error) {}
  }

  const toggle = () => {
    console.log('toggled')
    setShow(true)
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
        <div className={styles.page}>
          <section>
            <ProfileSummary
              name={profile.name}
              id={profile.id}
              toggle={toggle}
              share={share}
            ></ProfileSummary>
          </section>

          <section>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="card-title">Your favorite artists</h4>
                <ArtistListExtended
                  artists={profile.artists}
                ></ArtistListExtended>
              </Card.Body>
            </Card>
          </section>

          <section>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="card-title">Your recent tracks</h4>
                <SongList tracks={profile.tracks} />
              </Card.Body>
            </Card>
          </section>

          <section>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="card-title">Your recent tracks</h4>
                <SongTable tracks={profile.tracks} />
              </Card.Body>
            </Card>
          </section>

          <ShareModal
            id={profile.id}
            show={show}
            onHide={() => setShow(false)}
          ></ShareModal>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
