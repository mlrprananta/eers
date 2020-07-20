import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

export const TopNavbar: React.FC = (props) => (
    <Navbar sticky="top">
    <Navbar.Brand>{'E&ERS'}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#playlists">Playlists</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
)