import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Top({ setSelectedTopic }) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Adam Peterman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => setSelectedTopic("about")}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedTopic("projects")}>
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedTopic("contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Top;
