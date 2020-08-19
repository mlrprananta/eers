import React, { useEffect, useState } from 'react'

import { RouteComponentProps } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import { SongTable } from '../components/table/SongTable'
import { UserDTO } from '../data/dto'
import { Loading } from './Loading'
import { ShareNavbar } from '../components/ShareNavbar'
import { ArtistListExtended } from '../components/ArtistListExtended'
import styles from './Page.module.css'
import { ProfileSummary } from '../components/ProfileSummary'
import { SongList } from '../components/SongList'

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
        <div className={styles.page}>
          <section>
            <ProfileSummary
              name={profile.name}
              id={profile.id}
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
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
