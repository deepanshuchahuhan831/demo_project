import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Del()
{
    var {id}=useParams()
   var nav=useNavigate()
    async function delData()
    {
    var result=axios.delete(`http://localhost:3000/Student/${id}`)
    //alert("Record Deleted")
nav("/api4")
    }
useEffect(()=>{
    delData()
},[])
    return(
        <div>
            <hr/><center><h1>Delete Record Page</h1></center><hr/>
        </div>
    )
}
export default Del;