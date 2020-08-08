import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthDispatch } from '../context/AuthContext'

export const MyNavbar: React.FC = (props) => {
  const dispatch = useAuthDispatch()

  return (
    <Navbar>
      <Navbar.Brand>{'E&ERS'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="tracks">
            Tracks
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Button
            variant="outline-primary"
            onClick={() => {
              dispatch({ type: 'RESET' })
            }}
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
