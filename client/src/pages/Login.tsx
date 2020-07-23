import React, { useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

export const Login: React.FC = () => {
    const { setToken } = useAuth()

    const authenticate = () => {
        axios.get('/api/authenticate').then((res) => {
            if (res.status === 200) {
                window.location = res.data
            } else {
                console.error(res.statusText)
            }
        })
    }

    return (
        <Container>
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
