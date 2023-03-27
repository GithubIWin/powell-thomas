import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const About = () => {
  return (
    <Container fluid className="rowContainer">
      <Row className="justify-content-md-center ">
        <Col lg="9">
          <div className="aboutSec">
            <p>
              {" "}
              Greetings! I'm Powell, a seasoned performance marketing
              professional with over 4 years of experience managing 20+ clients
              across 5 continents and diverse domains. With an overall budget of
              5.8 Cr+ and generating 86 Cr+ in revenue, I have honed my
              expertise in executing comprehensive marketing strategies across
              all platforms.
            </p>
            <p>
              {" "}
              As a leader, I have successfully managed a 10-member team,
              ensuring the successful execution of campaigns and simultaneously
              managing 8+ clients on social media and paid channels with a
              monthly ad spend of 1.5 Cr.{" "}
            </p>
            <p>
              Proficient in HubSpot, Salesforce, Gartner, and Seamelss.ai, I
              create effective workflows for lead nurturing and onboarding,
              driving business growth and delivering exceptional results.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
