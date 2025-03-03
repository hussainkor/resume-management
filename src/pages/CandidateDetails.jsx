import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApplicantContext } from "../context/applicantContext";

export default function CandidateDetails() {
  const { fname } = useParams();
  const { applicantData } = useContext(ApplicantContext);
  const candidate = applicantData.find((item) => item.fname === fname);
  useEffect(() => {
    console.log(applicantData);
  }, []);
  return (
    <div className="content">
      <div className="profile-box">
        <div className="profile-pic">
          <img src={candidate.c_photo} alt={candidate.fname} />
        </div>
        <div className="profile-data">
          <h3>
            {candidate.fname}
            {candidate.lname}
          </h3>
          <p>{candidate.email}</p>
          <p>{candidate.phone}</p>
          <p>Apply for: {candidate.applyfor}</p>
          <button className="btn btn-detail btn-sm">Resume</button>
        </div>
      </div>
    </div>
  );
}
