import React, { useState } from "react";
function API1()
{
    var [mydata,setMydata]=useState([])
    function getData()
    {
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json().then(data=>{
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
                <td>User Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Website</td>
                </tr>
            {
                mydata.map(row=>
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.website}</td>

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
export default API1
