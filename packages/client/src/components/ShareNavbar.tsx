import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ShareNavbar: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Brand as={Link} to="/home">
        {'E&ERS'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button as={Link} to="/" variant="primary">
            <span>Connect </span>
            <img
              src="/Spotify_Icon_CMYK_White.png"
              height={22}
              width={22}
              alt="logo"
              style={{ verticalAlign: 'text-bottom' }}
            />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
