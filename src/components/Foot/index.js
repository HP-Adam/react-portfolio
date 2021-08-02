import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Foot() {
  return (
    <footer>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand>Thanks for Visiting!</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="https://www.linkedin.com/in/adam-peterman-689179b9/">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://github.com/HP-Adam">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Foot;
