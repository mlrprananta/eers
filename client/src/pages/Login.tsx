import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'

export const Login: React.FC = () => {
  const authenticate = () => {
    axios
      .get('/api/authorize')
      .then((res) => {
        window.location = res.data
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <Container fluid className="parent">
      <h1>{'E&ERS'}</h1>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{'Eyes & Ears'}</Card.Title>
          <Card.Text>Connect with Spotify and get started!</Card.Text>
          <Button onClick={authenticate} variant="primary">
            Connect with Spotify
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
