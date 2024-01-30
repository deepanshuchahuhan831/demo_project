import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Insert(){

    var nav=useNavigate()
    var [name,setName]=useState()
    var [course,setCourse]=useState()
    var [msg,setMsg]=useState()
    var insertData=async()=>{
        var dt={"name":name,"course":course}
        var result=await axios.post("http://localhost:3000/student",dt)
        console.log(result)
        setMsg("Record Save Succefully")
        nav("/API4")
    }
    return(
        <div>
<hr/>
<center><h1>Add New Recor Page</h1></center><hr/>
<br/><br/><br/>
<div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4" style={{"border":"2px solid gray","padding":"40px"}}>
        Enter Name
        <input type="text" className="form-control" onInput={(e)=>setName(e.target.value)}/><br/>
        Enter Course
        <input type="text" className="form-control" onInput={(e)=>setCourse(e.target.value)}/><br/>
        <button className="btn btn-success" onClick={()=>insertData()}>Add Record</button>

        <br/>
        <h4>{msg}</h4>
    </div>

</div>
        </div>
    )
}
export default Insert;