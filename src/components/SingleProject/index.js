import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Project(props) {
  const { image, title, description, deploy, gitrepo } = props;

  return (
    <Col>
      <Card style={{ width: "80%" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={deploy}>Deployed site</Card.Link>
          <Card.Link href={gitrepo}>GitHub Repo</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
