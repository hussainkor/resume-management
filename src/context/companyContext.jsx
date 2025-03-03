import { createContext, useState } from "react";
import { companyDB } from "../data";

export const CompanyContext = createContext();

export default function CompanyContextProvider({ children }) {
  const [companyData, setCompanyData] = useState(companyDB);
  return (
    <CompanyContext.Provider value={{ companyData, setCompanyData }}>
      {children}
    </CompanyContext.Provider>
  );
}
