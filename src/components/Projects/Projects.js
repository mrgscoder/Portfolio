import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comingsoon from "/Users/ayanokoji/Desktop/Portfolio/Portfolio-master/src/Assets/comingsoon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingsoon}
              isBlog={false}
              title="Coming Soon"
              description="Exciting new projects are on the way. Stay tuned for updates!"
              ghLink={null}
              demoLink={null}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
