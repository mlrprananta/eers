import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const MyNavbar: React.FC = (props) => (
    <Navbar sticky="top">
        <Navbar.Brand>{'E&ERS'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="home">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="profile">
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
