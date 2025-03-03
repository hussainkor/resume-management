import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style/global.scss";
import App from "./App.jsx";

import ThemeContextProvider from "./context/themeContext.jsx";
import CompanyContextProvider from "./context/companyContext.jsx";
import JobContextProvider from "./context/jobContext.jsx";
import ApplicantContextProvider from "./context/applicantContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompanyContextProvider>
      <JobContextProvider>
        <ThemeContextProvider>
          <ApplicantContextProvider>
            <App />
          </ApplicantContextProvider>
        </ThemeContextProvider>
      </JobContextProvider>
    </CompanyContextProvider>
  </StrictMode>
);
