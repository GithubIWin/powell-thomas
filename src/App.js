import "./App.css";
import Homepage from "./components/Homepage";
import { HashRouter } from "react-router-dom";
import About from "./components/About";
import CaseContainer from "./components/CaseContainer";
import HeaderSection from "./components/HeaderSection";
import ResultScreens from "./components/ResultScreens";
import { useState } from "react";

function App() {
  const [openStudyDetail, setOpenStudyDetail] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <HeaderSection />
        <Homepage />

        {!openStudyDetail && <About />}

        {!openStudyDetail && <ResultScreens />}
        <CaseContainer
          openStudyDetail={openStudyDetail}
          setOpenStudyDetail={setOpenStudyDetail}
        />
      </div>
    </HashRouter>
  );
}

export default App;
