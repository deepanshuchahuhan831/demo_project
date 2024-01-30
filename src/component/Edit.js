import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit(){

    var nav=useNavigate()
var data=useParams()
console.log(data)
   
    return(
        <div>
<hr/>
<center><h1>Edit Recor Page</h1></center><hr/>
<br/><br/><br/>
<div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4" style={{"border":"2px solid gray","padding":"40px"}}>
    ID
        <input type="text" className="form-control" value={data.id}/><br/>
        Name
        <input type="text" className="form-control"  value={data.name}/><br/>
        Enter Course
        <input type="text" className="form-control" value={data.course}/><br/>
        <button className="btn btn-success" >Update Record</button>

        <br/>
    
    </div>

</div>
        </div>
    )
}
export default Edit;