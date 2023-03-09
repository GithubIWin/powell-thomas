import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import powellbg from "../resources/powell-bg.png";
import "./style.css";

const Profile = () => {
  return (
    <Container fluid className="rowContainer">
      <Row className="justify-content-md-center ">
        <Col lg="9">
          <Row className="justify-content-md-center ">
            <Col className="colProfile">
              <Image
                src={powellbg}
                alt="powell-thomas-profile-pic"
                className="myImg"
                rounded
              />
            </Col>
            <Col className="colProfile parentCenter">
              <div>
                <p className="nameTitle">
                  Hey There, <br /> I'm Powell Thomas
                </p>
                <p>
                  {" "}
                  I co-founded a digital creative agency called Blusteak Media
                  while I was at college. Now we are an acclaimed group of
                  digital creative marketing team working in some crazy &
                  challenging projects for ambitious brands.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
