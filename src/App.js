import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactForm";
import CaseContainer from "./components/CaseContainer";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <HeaderSection />
        <Homepage />
        <CaseContainer />

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
