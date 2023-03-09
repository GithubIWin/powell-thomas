import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

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
        <div>
          <h2 className="detailSubTitle">{iter.subHead}</h2>
          <p className="detailContent" key={key}>
            {iter.details}
          </p>
        </div>
      ))}

      <button  className="cardButton" onClick={HandleClick}>
        Go Back
      </button>
    </div>
  );
};

export default StudeyDetails;
