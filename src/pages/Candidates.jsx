import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { MdArrowCircleRight } from "react-icons/md";
import { ApplicantContext } from "../context/applicantContext";

export default function Candidates() {
  const navigate = useNavigate();
  const { applicantData } = useContext(ApplicantContext);

  return (
    <div className="page-manage">
      <h3>
        Candidate List
        <button
          className="btn btn-add btn-lg"
          onClick={() => navigate("/candidates/add")}
        >
          <LuPlus /> Add
        </button>
      </h3>
      {applicantData.length > 0 ? (
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>SI No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Applied</th>
              <th>Resume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applicantData.map((item, i) => (
              <tr key={item.id}>
                <td>
                  <span className="number">{i + 1}</span>
                </td>
                <td>
                  {item.fname} {item.lname}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.applyfor}</td>
                <td>
                  <Link
                    className="btn btn-detail btn-sm"
                    to={item.file}
                    target="_blank"
                  >
                    Download
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/candidates/${item.fname}`)}
                    className="btn btn-detail btn-sm"
                  >
                    <MdArrowCircleRight />
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
            onClick={() => navigate("/candidates/add")}
            className="btn btn-add btn-lg"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
