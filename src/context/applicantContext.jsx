import { useState, createContext } from "react";
import { applicantDB } from "../data";

export const ApplicantContext = createContext();

const ApplicantContextProvider = ({ children }) => {
  const [applicantData, setApplicantData] = useState(applicantDB);
  return (
    <ApplicantContext.Provider value={{ applicantData, setApplicantData }}>
      {children}
    </ApplicantContext.Provider>
  );
};

export default ApplicantContextProvider;
