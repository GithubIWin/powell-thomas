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
      {caseStudy.details
        ? caseStudy.details.map((iter, key) => (
            <p className="detailContent" key={key}>
              {iter}
            </p>
          ))
        : null}
      {caseStudy.subSections
        ? caseStudy.subSections.map((iter, key) => (
            <div>
              <h3 className="subSubTitle">{iter.subHead}</h3>
              {iter.details.map((iter, key) => (
                <p className="detailContent" key={key}>
                  {iter}
                </p>
              ))}
              {iter.images && iter.images.length > 0 ? (
                <Container>
                  <Row>
                    {iter.images.map((img, key) => (
                      <Col>
                        <Image
                          className="imgStyle"
                          src={img.src}
                          alt={img.alt}
                          rounded
                        />
                        {img.caption && (
                          <p>
                            <i>
                              <b>{img.caption}</b>
                            </i>
                          </p>
                        )}
                      </Col>
                    ))}
                  </Row>
                </Container>
              ) : null}
              {iter.subSections
                ? iter.subSections.map((section, key) => (
                    <div>
                      <h4 className="subheading">{section.subHead}</h4>
                      {section.details.map((iter, key) => (
                        <p className="detailContent" key={key}>
                          {iter}
                        </p>
                      ))}
                      {section.images && section.images.length > 0 ? (
                        <Container>
                          <Row>
                            {section.images.map((img, key) => (
                              <Col>
                                <Image
                                  className="imgStyle"
                                  src={img.src}
                                  alt={img.alt}
                                  rounded
                                />
                                {img.caption && (
                                  <p>
                                    <i>
                                      <b>{img.caption}</b>
                                    </i>
                                  </p>
                                )}
                              </Col>
                            ))}
                          </Row>
                        </Container>
                      ) : null}
                    </div>
                  ))
                : null}
            </div>
          ))
        : null}
      {caseStudy.images && caseStudy.images.length > 0 ? (
        <Container>
          <Row>
            {caseStudy.images.map((img, key) => (
              <Col>
                <Image
                  className="imgStyle"
                  src={img.src}
                  alt={img.alt}
                  rounded
                />
                {img.caption && (
                  <p>
                    <p>
                      <i>
                        <b>{img.caption}</b>
                      </i>
                    </p>
                  </p>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}
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
