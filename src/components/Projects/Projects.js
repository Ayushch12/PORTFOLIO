
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotsauce from "../../Assets/Projects/hotsauce.jpg";
import amazona from "../../Assets/Projects/amazona.jpg";
import lachouetteagence from "../../Assets/Projects/lachouetteagence.jpg";
import reservia from "../../Assets/Projects/reservia.jpg";
import groupomania from "../../Assets/Projects/groupomania.jpg";
import ohmyfood  from "../../Assets/Projects/ohmyfood.jpg";

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
              imgPath={reservia}
              title="Reservia for Hotel"
              description="Turn Mock-ups Into a Web Page with HTML & CSS, implementing a travel booking platform's website from scratch."
              ghLink="https://github.com/Ayushch12/p2_CHALISE_ayush.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              title="Restaurant dish"
              description="Integrate a mobile website with animations in CSS. Implement the mobile version of this foodtech website with CSS animations."
              ghLink="https://github.com/Ayushch12/P3_CHALISE_Ayush.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lachouetteagence}
              title="Optimize an Existing Website (La Chouette agence)"
              description="Research and implement current best practices and standards in web development, including SEO, size and speed, and accessibility. "
              ghLink="https://github.com/Ayushch12/P4_AYUSH_CHALISE.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotsauce}
              title="Built a Secure API for a Review App"
              description="Built the back end for a new app, Hot Takes, where customers review specialty hot sauces. Use Node.js, Express, and MongoDB to build its NoSQL database. Secure customer data by applying the OWASP web security standards. "
              ghLink="https://github.com/Ayushch12/P6_CHALISE_AYUSH.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groupomania}
              title="Built a Full-Stack Corporate Social Network"
              description="Analyze a client’s needs to define the scope and features of a new application. With the help of a front-end framework (Vue.js), built a full-stack solution, including a SQL database. The user is able to share a post, like and comment."
              ghLink="https://github.com/Ayushch12/P7_Groupomania-master.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazona}
              title="Built an e-commerce Website with React.js"
              description="  "
              ghLink="https://github.com/Ayushch12/Amazona2.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
