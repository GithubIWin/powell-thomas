import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CaseStudySmall = (props) => {
  const { caseStudy, setSelectedStudy, setOpenStudyDetail } = props;
  const HandleClick = () => {
    setSelectedStudy(caseStudy);
    setOpenStudyDetail(true);
  };
  return (
    <Container className="studyCard">
      <Row>
        <Col xs lg="4">
          <div className="thumbnail" onClick={HandleClick}>
            <p className="thumbText">{caseStudy.thumbnail}</p>
          </div>
        </Col>
        <Col xs lg="8">
          <div className="cardContainer">
            <h3 className="cardTitle">{caseStudy.title}</h3>
            <p className="cardDesc">{caseStudy.description}</p>
            <button
              className="cardButton"
              // variant="primary"
              onClick={HandleClick}
            >
              Read More
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CaseStudySmall;
