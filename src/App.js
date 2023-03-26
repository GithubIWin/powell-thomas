import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactForm";
import CaseContainer from "./components/CaseContainer";
import HeaderSection from "./components/HeaderSection";
import ResultScreens from "./components/ResultScreens";
import { useState } from "react";
// import FooterCom from "./components/FooterCom";

function App() {
  const [openStudyDetail, setOpenStudyDetail] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <HeaderSection />
        <Homepage />
        <CaseContainer
          openStudyDetail={openStudyDetail}
          setOpenStudyDetail={setOpenStudyDetail}
        />
        {!openStudyDetail && <ResultScreens />}
        {/* <FooterCom/> */}
        {/* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/caseStudies" element={<CaseContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </HashRouter>
  );
}

export default App;
