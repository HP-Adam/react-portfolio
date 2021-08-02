import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Project from "../SingleProject";

function Projects() {
  return (
    <section style={{ padding: "2%" }}>
      <Container>
        <Row
          sm={2}
          xs={1}
          className="justify-content-center"
          style={{ marginBottom: "16px" }}
        >
          <Project
            image={require("../../assests/beer_app.PNG").default}
            title={"Beer Pairing"}
            description={
              "A React App deployed on Heroku utilizing Apollo GraphQL. Search your favorite foods and the app will find the best beers to pair."
            }
            deploy={"http://beer-pair.herokuapp.com/"}
            gitrepo={"https://github.com/HP-Adam/Beer-Search-App"}
          />
          <Project
            image={require("../../assests/marvel-quiz.png").default}
            title={"Marvel Quiz"}
            description={
              "A personality quiz to determine which Marvel super hero you are most like."
            }
            deploy={"https://hp-adam.github.io/marvel-quiz/"}
            gitrepo={"https://github.com/HP-Adam/marvel-quiz"}
          />
        </Row>
        <Row sm={2} xs={1} className="justify-content-center">
          <Project
            image={require("../../assests/top_bun.png").default}
            title={"Top Bun"}
            description={
              "This is a forum created using node and express and utilizes a SQL database to store information. RESTFUL API's are used create, manipulate, and display information from the database to the front end. Create an account and start discussing and voting on your favorite burgers and sandwiches around."
            }
            deploy={"https://remembrance-mountie-51483.herokuapp.com/post/1"}
            gitrepo={"https://github.com/HP-Adam/top-bun"}
          />
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
