import React from 'react'
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth'

export const Login: React.FC = () => {
  const { authenticate } = useAuth()

  return (
    <Jumbotron>
      <Container className="parent">
        <h1>Eyes and ears</h1>
        <p>Connect with Spotify and get started!</p>
        <p>
          <Button onClick={authenticate} variant="primary">
            <span>Connect with Spotify </span>
            <img
              src="/Spotify_Icon_CMYK_White.png"
              height={22}
              width={22}
              alt="logo"
              style={{ verticalAlign: 'text-bottom' }}
            />
          </Button>
        </p>
      </Container>
    </Jumbotron>
  )
}
