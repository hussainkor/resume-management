import React, { useContext } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { redirect, useNavigate } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { CompanyContext } from "../context/companyContext";

export default function CompanyAdd() {
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");

  const { companyData, setCompanyData } = useContext(CompanyContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !companyType) return;
    const check = companyData.find(
      (item) => item.name.toLowerCase() === companyName.toLowerCase()
    );
    if (!check) {
      const addItem = {
        id: nanoid(),
        name: companyName,
        companyType: companyType,
        status: true,
      };

      setCompanyData((item) => [...item, addItem]);
      toast("Company added!");
    } else {
      console.log("Company already exist!");
    }
    setCompanyName("");
    setCompanyType("");
  };
  return (
    <div className="page-manage">
      <ToastContainer />
      <h3>
        Add Company
        <button
          className="btn btn-add btn-lg"
          onClick={() => navigate("/companies/")}
        >
          <FaListUl /> Back to List
        </button>
      </h3>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
            required
          />
          <label>Company Type</label>
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
          >
            <option>Select Type</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button className="btn btn-add btn-lg">Add</button>
        </form>
      </div>
    </div>
  );
}
