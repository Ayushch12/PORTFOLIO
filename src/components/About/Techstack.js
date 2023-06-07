import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaVuejs } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { SiSass } from "react-icons/si";
import { DiMysql } from "react-icons/di";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiSass />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite  />
      </Col>



    </Row>
  );
}

export default Techstack;