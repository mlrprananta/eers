import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar: React.FC = (props) => (
  <Navbar sticky="top">
    <Navbar.Brand>{"E&ERS"}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="home">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="profile">Home</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
