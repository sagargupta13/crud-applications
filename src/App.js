
import { useEffect, useState } from 'react';
import './App.css';
import AxiosPost from './components/AxiosPost';
import Create from './components/Create';
import axios from 'axios';

function App() {
  const [columns,setCoulmns] =useState([])
  const [records,setRecords] =useState([])
  useEffect(()=>{
    axios.get('  http://localhost:3030/users')
    .then(res =>{
      setCoulmns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  },[])
  return (
    <div className="container mt-5">
     {/* <Create/>
     <AxiosPost/> */}
<table className='table'>
<thead>
<tr>
  {columns.map((c,i)=>(
    <th key={i}> {c} </th>
  ))}
  <th>Action</th>
  
</tr>
</thead>
<tbody>
  {
    records.map((d,i)=>(
      <tr key={i}>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.email}</td>
        <td>Up/De</td>
      </tr>
    ))
    
  }
  
</tbody>
</table>
    </div>
   
  );
}  

export default App;
