import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const navigat = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(" http://localhost:3030/users", inputData)
      .then((res) => {
        alert("Data added successfully!");
        navigat("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <form
      className="col-md-6 d-flex flex-column
        w-100 vh-100 
        justify-content-center align-items-center"
      onSubmit={handleSubmit}
    >
      <div className="form-group ">
        <label for="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Your name"
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
        />
      </div>
      <div className="form-group ">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Add;

{
  /* <div className= 'd-flex
                        w-100 vh-100 justify-content-center align-items-center
     <div className= 'w-50 border bg-light p-5'> */
}
