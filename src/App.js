import { useEffect, useState } from "react";
import "./App.css";
import AxiosPost from "./components/AxiosPost";
import Create from "./components/Create";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [columns, setCoulmns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate =useNavigate()
  useEffect(() => {
    axios.get("  http://localhost:3030/users").then((res) => {
      setCoulmns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
  return (
    <div className="container mt-5">
      {/* <Create/>
     <AxiosPost/> */}
     <div className="text-end">
      <Link to="/create" className="btn btn-primary"> Add +</Link>
     </div>

      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}> {c} </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link to ={`/update/${d.id}`} className="btn btn-sm btn-success m-2">Update</Link>
                <Link to ="/delete" className="btn btn-sm btn-danger" onClick={e=>handleDelete(d.id)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleDelete(id){
const conf =window.confirm("Do you want to delete the record")
if (conf) {
  axios.delete("  http://localhost:3030/users/"+id)
  .then(res=>{
    alert("record is deleted successfully")
    navigate('/')
  }
    ).catch(err=>console.log(err))
}
  }
}

export default App;
