import { useContext, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { JobContext } from "../context/jobContext";
import { ApplicantContext } from "../context/applicantContext";

export default function CandidateAdd() {
  const { jobData } = useContext(JobContext);
  const { setApplicantData } = useContext(ApplicantContext);

  const navigate = useNavigate();

  const [createCandidate, setCreateCandidate] = useState({
    id: nanoid(),
    fname: "",
    lname: "",
    email: "",
    phone: "",
    applyfor: "",
    file: "",
    c_photo: "",
  });

  const handleChange = (e) => {
    setCreateCandidate({ ...createCandidate, [e.target.name]: e.target.value });
  };

  const clearInput = () => {
    setCreateCandidate({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      applyfor: "",
      file: "",
      c_photo: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicantData((item) => [...item, createCandidate]);
    toast("Candidate added!");
    clearInput();
  };
  return (
    <div className="page-manage">
      <ToastContainer />
      <h3>
        Add Candidate
        <button
          className="btn btn-add btn-lg"
          onClick={() => navigate("/candidates/")}
        >
          <FaListUl /> Back to List
        </button>
      </h3>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Apply for</label>
          <select
            name="applyfor"
            onChange={handleChange}
            value={createCandidate.applyfor}
            required
          >
            <option>Select Job Offer</option>
            {jobData.map(
              (item) =>
                item.status && (
                  <option key={item.id} value={item.jobTitle}>
                    {item.jobTitle}
                  </option>
                )
            )}
          </select>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            onChange={handleChange}
            value={createCandidate.fname}
            required
            placeholder="First name"
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            onChange={handleChange}
            value={createCandidate.lname}
            required
            placeholder="Last name"
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={createCandidate.email}
            required
            placeholder="Email Id"
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={createCandidate.phone}
            required
            placeholder="Phone number"
          />
          <label>Attach File</label>
          <input
            type="text"
            name="file"
            onChange={handleChange}
            value={createCandidate.file}
            required
          />
          <label>Attach Photo</label>
          <input
            type="text"
            name="c_photo"
            onChange={handleChange}
            value={createCandidate.c_photo}
            required
          />
          <button className="btn btn-add btn-lg">Create</button>
        </form>
      </div>
    </div>
  );
}
