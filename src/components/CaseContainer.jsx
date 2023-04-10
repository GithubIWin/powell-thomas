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
  const { openStudyDetail, setOpenStudyDetail } = props;

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <h1 className="caseHeading fontSize60">Case Studies</h1>
          <p className="caseDesc">
            Check out the case studies below and see how paid marketing
            campaigns have helped businesses like yours to thrive in today's
            mobile-first world.
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
