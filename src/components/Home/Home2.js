import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/aa.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",padding:"0 0 3rem 0" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <h1 style={{ fontSize: "1.5em" }}>
              I'm <span className="purple"> FULL STACK WEB DEVELOPER  </span>
            </h1>


            <p className="home-about-body">
              I fell in love with coding and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />Find myself as smart and intelligent person looking for
               a better way to get the job done in short term.
              <i>
                <b className="purple"> </b>
              </i>
              <br />
              <br />

              <i>

                {" "}You can found me specially working in
                <b className="purple"> Scss, Javascript, React.js,
                Vue.js, TypeScript, Node.js, MangoDB, Express, Mysql, Sql, SEO. </b>
                <b className="purple">

                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Web applications <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  in FLUTTER, Dart and React native.
                </b>


              </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ayushch12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ayushchalise12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayush-chalise-4753b7197/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayush_chalisee/ "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;