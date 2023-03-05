import React from "react";
import CaseContainer from "./CaseContainer";
import HeaderSection from "./HeaderSection";
import Profile from "./Profile";
import "./style.css";

const Homepage = () => {
  return (
    <div>
      <HeaderSection />
      <Profile />
      <hr className="hrStyle"/>
      <CaseContainer />
    </div>
  );
};

export default Homepage;
