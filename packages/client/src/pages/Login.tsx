import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth'

export const Login: React.FC = () => {
  const { authenticate } = useAuth()

  return (
    // <Jumbotron>
    <Container fluid className="full parent bg-primary">
      <div className="parent">
        <h1 className="display-3 text-light text-center">Eers</h1>
        <p className="text-light">Connect with Spotify and get started!</p>
        <p>
          <Button onClick={authenticate} variant="outline-light">
            <span>Connect with Spotify </span>
            <i
              className="fab fa-spotify fa-lg"
              style={{ verticalAlign: '-0.166667rem' }}
            ></i>
            {/* <img
              src="/Spotify_Icon_CMYK_White.png"
              height={22}
              width={22}
              alt="logo"
              style={{ verticalAlign: 'text-bottom' }}
            /> */}
          </Button>
        </p>
      </div>
    </Container>
    // </Jumbotron>
  )
}
