import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { IoTrash } from "react-icons/io5";
import { CompanyContext } from "../context/companyContext";

export default function Company() {
  const navigate = useNavigate();

  const { setCompanyData, companyData } = useContext(CompanyContext);

  function handleCheck(id) {
    const update = companyData?.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setCompanyData(update);
  }

  const handleDelete = (id) => {
    setCompanyData((company) => company.filter((item) => item.id !== id));
  };
  return (
    <div className="page-manage">
      <h3>
        Company List
        <button
          className="btn btn-add btn-lg"
          onClick={() => navigate("/companies/add")}
        >
          <LuPlus /> Add
        </button>
      </h3>

      {companyData?.length > 0 ? (
        <table cellPadding="1" cellSpacing="1">
          <thead>
            <tr>
              <th>SI No</th>
              <th>Company Name</th>
              <th>Company Type</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {companyData?.map((company, i) => (
              <tr key={company.id}>
                <td>
                  <span className="number">{i + 1}</span>
                </td>
                <td>{company.name}</td>
                <td>{company.companyType}</td>
                <td>
                  <label className="switch">
                    <input
                      checked={company.status && "checked"}
                      type="checkbox"
                      value={company.status}
                      onChange={() => handleCheck(company.id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(company.id)}
                  >
                    <IoTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="content bg-trans">
          <h4>No Data found, add some data</h4>
          <button
            onClick={() => navigate("/companies/add")}
            className="btn btn-add btn-lg"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
