import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { JobContext } from "../context/jobContext";
import { CompanyContext } from "../context/companyContext";
import { jobLevelDB } from "../static/staticData";

export default function JobAdd() {
  const navigate = useNavigate();
  const { setJobData } = useContext(JobContext);
  const { companyData } = useContext(CompanyContext);

  const [createJob, setCreateJob] = useState({
    id: nanoid(),
    jobTitle: "",
    totalPosaition: "",
    jobDescription: "",
    company: "",
    date: new Date(),
    status: true,
  });

  const handleChange = (e) => {
    setCreateJob({ ...createJob, [e.target.name]: e.target.value });
  };

  const clearInput = () => {
    setCreateJob({
      jobTitle: "",
      totalPosaition: "",
      jobDescription: "",
      company: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobData((item) => [...item, createJob]);
    toast("Job created!");
    clearInput();
  };

  return (
    <div className="page-manage">
      <ToastContainer />
      <h3>
        Add Job
        <button
          className="btn btn-add btn-lg"
          onClick={() => navigate("/jobs/")}
        >
          <FaListUl /> Back to List
        </button>
      </h3>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            onChange={handleChange}
            value={createJob.jobTitle}
            required
            placeholder="Enter job title"
          />
          <label>Number of Position</label>
          <input
            type="number"
            name="totalPosaition"
            onChange={handleChange}
            value={createJob.totalPosaition}
            required
            placeholder="Enter number"
          />
          <label>Company Name</label>
          <select
            name="company"
            onChange={handleChange}
            value={createJob.company}
            required
          >
            <option>Select Company</option>
            {companyData.map(
              (item) =>
                item.status && (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                )
            )}
          </select>
          <label>Job Level</label>
          <select
            name="jobLevel"
            onChange={handleChange}
            value={createJob.jobLevel}
            required
          >
            <option>Select Level</option>
            {jobLevelDB.map((level) => (
              <option key={level.id} value={level.levelName}>
                {level.levelName}
              </option>
            ))}
          </select>
          <textarea
            name="jobDescription"
            onChange={handleChange}
            value={createJob.jobDescription}
            placeholder="Job Details"
            required
          ></textarea>
          <button className="btn btn-add btn-lg">Create</button>
        </form>
      </div>
    </div>
  );
}
