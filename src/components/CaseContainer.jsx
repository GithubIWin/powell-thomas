import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { caseStudiesData } from "../static";
import CaseStudySmall from "./CaseStudySmall";
import StudeyDetails from "./StudeyDetails";

const CaseContainer = (props) => {
  const [seletedStudy, setSelectedStudy] = useState({});
  // const [openStudyDetail, setOpenStudyDetail] = useState(false);
  const {openStudyDetail, setOpenStudyDetail} = props

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <h1 className="caseHeading fontSize60">Case Studies</h1>
          <p className="caseDesc">
            Having a clear Digital Marketing Strategy can help your brand to
            thrive in this mobile-first world. Yes, you can trust us to build
            and run your social media campaigns.
          </p>
        </Col>
      </Row>
      {openStudyDetail ? (
        <StudeyDetails
          caseStudy={seletedStudy}
          setOpenStudyDetail={setOpenStudyDetail}
        />
      ) : (
        caseStudiesData.map((iter, key) => (
          <Row>
            <Col>
              <CaseStudySmall
                caseStudy={iter}
                key={key}
                setSelectedStudy={setSelectedStudy}
                setOpenStudyDetail={setOpenStudyDetail}
              />
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default CaseContainer;
