import React, { useState } from "react";
function API3()
{
    var [mydata,setMydata]=useState([])
    function getData()
    {
        fetch("http://localhost:3000/Student").then(res=>res.json().then(data=>{
            console.log(data)
setMydata(data)
        }))
    }
    getData()
    return(
        <div>
            <center><h1>Getting Data For Api Server</h1></center><hr/>
       <br/><br/><br/>
       <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <table className="table table-bordered table-striped table-hover table-dark">
               <tbody>
                <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Course</td>
                </tr>
            {
                mydata.map(row=>
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.course}</td>
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
export default API3
