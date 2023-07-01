import React, {useState} from 'react'
import axios from 'axios';
const AxiosPost = () => {

const data={user_name:"",age:"",email:""};
const [inputdata , setInputdata] = useState(data)


const handleData =(e)=>{
  setInputdata({...inputdata,[e.target.name]:e.target.value})
}

const handleSubmit =(e)=>{
  e.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/users", inputdata)
  .then((response)=>{
    console.log(response)
  })
}

const handleUpdate =(e)=>{
  e.preventDefault();
  axios.put("https://jsonplaceholder.typicode.com/users/1", inputdata)
  .then((response)=>{
    console.log(response)
  })
}


const handleDelete=(e)=>{
  e.preventDefault();
  axios.delete("https://jsonplaceholder.typicode.com/users/1")
  .then((response)=>{
    console.log(response)
  })
}

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
              name='user_name'
              placeholder="Name"
              value={inputdata.user_name}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label>Enter Age : </label>
            <input
              type="number"
              name='age'
              placeholder="Age"
              value={inputdata.age}
              onChange={handleData}
            />
          </div>
          <div className="form-group">
            <label>Enter Email : </label>
            <input
              type="email"
              name='email'
              placeholder="Email"
              value={inputdata.email}
              onChange={handleData}
            />
          </div>
          <br />
          <div >
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            />
          <button className='btn btn-secondary'  onClick={handleUpdate}>Update</button>
          <button className='btn btn-secondary'  onClick={handleDelete}>Delete</button>
          </div>
        </form>

       
      </div>
    </div>
  </>
  )
}

export default AxiosPost