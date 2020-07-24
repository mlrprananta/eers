import React, { useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

export const Login: React.FC = () => {
  const { setToken } = useAuth()

  const authenticate = () => {
    axios
      .get('/api/authenticate')
      .then((res) => {
        window.location = res.data
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <Container className="parent">
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
