import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SectionPart = (props) => {
  const caseStudy = props.case;
  return (
    <div>
      <h2 className="detailSubTitle">{caseStudy.subHead}</h2>
      {caseStudy.details ? (
        <p className="detailContent" key={caseStudy.key}>
          {caseStudy.details}
        </p>
      ) : null}
      {caseStudy.subSections
        ? caseStudy.subSections.map((iter, key) => (
            <div>
              <h3>{iter.subHead}</h3>
              {iter.details.map((iter, key) => (
                <p className="detailContent" key={key}>
                  {iter}
                </p>
              ))}
              <Container>
                <Row>
                  {iter.images && iter.images.length > 0
                    ? iter.images.map((img, key) => (
                        <Col xs={12} sm="12" md="6" lg="4">
                          <Image src={img.src} alt={img.alt} rounded />
                        </Col>
                      ))
                    : null}
                </Row>
              </Container>
            </div>
          ))
        : null}
    </div>
  );
};

const StudeyDetails = (props) => {
  const { caseStudy, setOpenStudyDetail } = props;
  const HandleClick = () => {
    setOpenStudyDetail(false);
  };
  return (
    <div className="detailsContainer">
      <h1 className="detailTitle">{caseStudy.title}</h1>
      {caseStudy.details.map((iter, key) => (
        <p className="detailContent" key={key}>
          {iter}
        </p>
      ))}

      {caseStudy.contents.map((iter, key) => (
        <SectionPart case={iter} key={key} />
      ))}

      <button className="cardButton" onClick={HandleClick}>
        Go Back
      </button>
    </div>
  );
};

export default StudeyDetails;
