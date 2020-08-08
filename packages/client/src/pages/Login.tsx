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
            Connect with Spotify
          </Button>
        </p>
      </Container>
    </Jumbotron>
  )
}
