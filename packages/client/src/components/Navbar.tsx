import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const MyNavbar: React.FC = (props) => {
  const { logout } = useAuth()

  return (
    <Navbar variant="dark" className="bg-primary shadow-sm">
      <Navbar.Brand as={Link} to="/home">
        {'E&ERS'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/tracks">
            Tracks
          </Nav.Link> */}
        </Nav>
        <Nav className="ml-auto">
          <Button variant="secondary" onClick={() => logout()}>
            {/* Logout */}
            <i className="fas fa-sign-out-alt"></i>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
