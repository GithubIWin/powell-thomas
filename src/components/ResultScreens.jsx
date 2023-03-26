import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { screenshotData } from "../static";

const ResultScreens = () => {
  return (
    <div>
      {screenshotData && screenshotData.length > 0 ? (
        <Container>
          <Row>
            <h1 className="caseHeading">
              Successful Performance Marketing for Top-Tier Clients and Big
              Budgets
            </h1>

            {screenshotData.map((img, key) => (
              <Col key={key}>
                <Image className="imgStyle imgWidth boxShadow" src={img.src} alt={img.alt} />
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
  );
};

export default ResultScreens;
