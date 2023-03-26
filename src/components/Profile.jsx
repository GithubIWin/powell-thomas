import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import powellbg from "../resources/powellSq.jpg";
import "./style.css";

const Profile = () => {
  return (
    <Container fluid className="rowContainer">
      <Row className="justify-content-md-center ">
        <Col lg="9">
          <Row className="justify-content-md-center ">
            <Col xs="12" sm="12" md="5" lg="5" xl="5" className="colProfile ">
              <Row className="imgSection">
                <Col>
                  <Image
                    src={powellbg}
                    alt="powell-thomas-profile-pic"
                    className="myImg"
                  />
                  <div class="social-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/powell-thomas-bbbab0131/"
                          target="blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tmspowell1@gmail.com"
                          target="blank"
                        >
                          <i class="material-icons">email</i>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+919497731079" target="blank">
                          <i class="fa fa-mobile-phone"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="7"
              lg="7"
              xl="7"
              className="colProfile parentCenter"
            >
              <div className="header_content">
                <div className="header_section">
                  <h2>Hello, I Am</h2>
                  <h1>Powell Thomas</h1>
                  <p>
                    Proven Success in Performance Marketing for Your Business
                    Needs. Let's Take Your Business to New Heights.
                  </p>
                  <div className="header_buttons">
                    <a href="/caseStudies" className="bttn bttn-outline">
                      View My Works
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
