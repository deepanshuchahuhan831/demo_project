import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function API4()
{
    var [mydata,setMydata]=useState([])
/*function getData()
    {
        axios.get("http://localhost:3000/student").then(res=>{
            console.log(res.data)
setMydata(res.data)
        })
    }*/

   async function getData()
    {
     var obj=  await axios.get("http://localhost:3000/student")
     console.log(obj.data)
     setMydata(obj.data)
    }
    

useEffect(()=>{
    getData()

},[])

async function delData(id)
{
    var rs=await axios.delete(`http://localhost:3000/student/${id}`)
    alert("Record Delete")
}
    return(
        <div>
            <center><h1>Getting Data to api</h1></center><hr/>
       <br/><br/><br/>
       <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <Link className="btn btn-success" to="/insert">Add Record</Link><br/><br/>
            <table className="table table-bordered table-striped table-hover table-dark">
               <tbody>
                <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Course</td>
                <td>Action</td>
                </tr>
            {
                mydata.map(row=>
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.course}</td>
                        <td>
                        <Link className="btn btn-danger" to={`/delete/${row.id}`}>Delete</Link>
                        &emsp; &emsp;
                        <Link className="btn btn-warning" to={`/edit/${row.id}/${row.name}/${row.course}`}>Edit</Link>
                        &emsp; &emsp;
                        <button className="btn btn-info" onClick={()=>delData(row.id)} >Delete</button>
                        </td>
                        </tr>
                    )
            }
            </tbody>
            </table>
        </div>

       </div>
        </div>
    )

}
export default API4
