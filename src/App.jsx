import { useContext, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";

// Lazy
const Home = lazy(() => import("./pages/Home"));
const Company = lazy(() => import("./pages/Company"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Candidates = lazy(() => import("./pages/Candidates"));
const CandidateDetails = lazy(() => import("./pages/CandidateDetails"));
const CandidateAdd = lazy(() => import("./pages/CandidateAdd"));
const CompanyAdd = lazy(() => import("./pages/CompanyAdd"));
const JobAdd = lazy(() => import("./pages/JobAdd"));

import { ThemeDarkContext } from "./context/themeContext";

function App() {
  const { darkMode } = useContext(ThemeDarkContext);

  const appStyle = darkMode ? "app dark" : "app";

  return (
    <div className={appStyle}>
      <Router basename="/portfolio/gold-movie">
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="companies">
              <Route index element={<Company />} />
              <Route path="add" element={<CompanyAdd />} />
            </Route>
            <Route path="jobs">
              <Route index element={<Jobs />} />
              <Route path="add" element={<JobAdd />} />
            </Route>
            <Route path="candidates">
              <Route index element={<Candidates />} />
              <Route path=":fname" element={<CandidateDetails />} />
              <Route path="add" element={<CandidateAdd />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
