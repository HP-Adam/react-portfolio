import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <section>
      <Container>
        <h2 style={{ marginTop: "16px" }}>Questions?</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
