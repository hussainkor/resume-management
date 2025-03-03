import { useState, createContext } from "react";
import { jobDetailsDB } from "../data";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [jobData, setJobData] = useState(jobDetailsDB);
  return (
    <JobContext.Provider value={{ jobData, setJobData }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
