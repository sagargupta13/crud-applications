import axios from "axios";
import React, { useEffect, useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const header = { "Access-Control_Allow-Origin": "*" };

  // function to store data in the api

  const handleSubmit = (e) => {
      e.preventDefalut();
      console.log("clicked");
    axios.post("https://649eab0a245f077f3e9cbefe.mockapi.io/crud", {
      e_name: name,
      e_age: age,
      e_email: email,
      header,
    });
  };
 const[userdata,setuserData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response)
        setuserData(response.data)
    })
  },[])
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-secondary p-2 text-center">
            <h1> Insert Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name : </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age : </label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email : </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              />
            </div>
          </form>

          {name}
          <br />
          {age}
          <br />
          {email}

          <div>
            {userdata.map((data)=>{
                return(
                    <div>
                        {data.name}
                         </div>
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
