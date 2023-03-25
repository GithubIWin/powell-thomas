import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactForm";
import CaseContainer from "./components/CaseContainer";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSection />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/caseStudies" element={<CaseContainer />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
