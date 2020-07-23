import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export const Login: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setToken } = useAuth();

  const authenticate = () => {
    axios.get("/api/authenticate").then((res) => {
      if (res.status === 200) {
        setToken(res.data);
        setLoggedIn(true);
        console.log("Token received");
      } else {
        console.error(res.statusText);
      }
    });
  };

  return (
    <Container>
      <h1>{"E&ERS"}</h1>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{"Eyes & Ears"}</Card.Title>
          <Card.Text>Connect with Spotify and get started!</Card.Text>
          <Button onClick={() => authenticate()} variant="primary">
            Connect with Spotify
          </Button>
          <a href="https://accounts.spotify.com/authorize?client_id=0b2ca3099d42444da079c1fde2b6c990&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9001%2Fcallback&scope=user-read-private%20user-read-email%20user-top-read">
            Login
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
};
