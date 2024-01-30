import React, { useState } from "react";
function API2()
{
    var [mydata,setMydata]=useState([])
    function getData()
    {
        fetch("https://jsonplaceholder.typicode.com/photos").then(res=>res.json().then(data=>{
            console.log(data)
setMydata(data)
        }))
    }
    getData()
    return(
        <div>
            <center><h1>Getting Data For Api Photoes Data</h1></center><hr/>
       <br/><br/><br/>
       <div className="row">
        <div className="col-md-12">
        
            <table className="table table-bordered table-striped table-hover table-dark">
               <tbody>
                <tr>
                <div class="card" style={{"width": "18rem"}}>
 
  <div class="Id">
    
    <h5 class="card-title">title</h5>
    <img src="url" class="card-img-top" alt=""></img>
    
   
  </div>
</div>
                </tr>
            {
                mydata.map(row=>
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.url}</td>
                        

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
export default API2
