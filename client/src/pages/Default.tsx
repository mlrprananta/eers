import React from "react";
import { Container } from "react-bootstrap";
import { MyNavbar as Navbar } from "../components/Navbar";
import { Route } from "react-router-dom";
import { Profile } from "./Profile";
import { Home } from "./Home";

export const Default: React.FC = () => (
  <Container>
    <Navbar />
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/user/:id" component={Profile} />
  </Container>
);
