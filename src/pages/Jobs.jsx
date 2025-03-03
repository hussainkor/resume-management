import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { IoTrash } from "react-icons/io5";
import { JobContext } from "../context/jobContext";
import { useContext } from "react";

export default function Jobs() {
  const navigate = useNavigate();
  const { setJobData, jobData } = useContext(JobContext);

  function handleCheck(id) {
    const update = jobData?.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setJobData(update);
  }

  const handleDelete = (id) => {
    setJobData((jobData) => jobData.filter((item) => item.id !== id));
  };

  return (
    <div className="page-manage">
      <h3>
        Job List
        <button
          className="btn btn-add btn-lg"
          onClick={() => navigate("/jobs/add")}
        >
          <LuPlus /> Add
        </button>
      </h3>
      {jobData.length > 0 ? (
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>SI No</th>
              <th>Job Title</th>
              <th>No. of Position</th>
              <th>Company</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((item, i) => (
              <tr key={item.id}>
                <td>
                  <span className="number">{i + 1}</span>
                </td>
                <td>{item.jobTitle}</td>
                <td>{item.totalPosaition}</td>
                <td>{item.company}</td>
                <td>
                  <label className="switch">
                    <input
                      checked={item.status && "checked"}
                      type="checkbox"
                      value={item.status}
                      onChange={() => handleCheck(item.id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
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
            onClick={() => navigate("/jobs/add")}
            className="btn btn-add btn-lg"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
