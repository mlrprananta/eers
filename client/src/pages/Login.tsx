import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login: React.FC = () => (
  <Container>
    <h1>{"E&ERS"}</h1>
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{"Eyes & Ears"}</Card.Title>
        <Card.Text>Connect with Spotify and get started!</Card.Text>
        <Button as={Link} to="home" variant="primary">
          Connect with Spotify
        </Button>
      </Card.Body>
    </Card>
  </Container>
);
