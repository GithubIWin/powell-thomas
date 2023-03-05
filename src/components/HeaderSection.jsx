import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const HeaderSection = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Powell Thomas</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderSection;
