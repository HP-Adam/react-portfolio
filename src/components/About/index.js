import React from "react";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", padding: "8px" }}
    >
      <Card style={{ width: "18rem", padding: "8px" }}>
        <Card.Img
          variant="top"
          src={require("../../assests/profile.jpg").default}
          style={{ objectFit: "none" }}
        />
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          I'm here to code and make money. And I'm all out of money.
        </Card.Text>
      </Card>
    </section>
  );
}

export default About;
