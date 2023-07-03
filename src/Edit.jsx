import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3030/users/" + id, data).then((res) => {
      alert("Data updated successfully !!");
      navigate("/");
    });
  };
  return (
    <div
      className="d-flex flex-column
    w-100 vh-100 
    justify-content-center align-items-center"
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">ID:</label>
            <input
              type="text"
              disabled
              name="id"
              className="form-control"
              placeholder="Enter Your name"
              value={data.id}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Your name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your name"
              value={data.email}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <button className="btn btn-info"> Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
