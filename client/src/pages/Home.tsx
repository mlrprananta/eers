import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import { SongList } from '../components/SongList'
import { ArtistList } from '../components/ArtistList'

export const Home: React.FC = () => {
  const [userName, setUsername] = useState('')
  const { token } = useAuth()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if ('display_name' in user) {
        setUsername(user.display_name)
      }
    }
  }, [token])

  return (
    <Container fluid>
      <h1>{'Welcome ' + userName}</h1>
      <ArtistList></ArtistList>
      <SongList></SongList>
    </Container>
  )
}
