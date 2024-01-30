import React, { useState } from "react";

function Data() {



  var [students, setStudents] = useState([
    { id: 1, name: 'Karan Kumar', course: 'BCA' },
    { id: 2, name: 'Deepu', course: 'BCA' },
    { id: 3, name: 'Mohit Chauhan', course: 'MCA' },
    { id: 4, name: 'Nikhil', course: 'Bsc' },
    { id: 5, name: 'Aanchal', course: 'Bca' }
  ]);

var [st,setSt]=useState(false)
  var [n,setName]=useState()
  var [c,setCourse]=useState()
  function AddRecord(){
    var addstudent = {id:students.length+1,name: n, course: c };
    students.push(addstudent)
 setStudents(students)
 setSt(false)
  }

  var showForm=()=>{

    setSt(true)
  }

  var delData=(id)=>{
students=students.filter(item=>item.id!==id)
console.log(students)
setStudents(students)
  }
  return (
    <div>
      <center><h1>Welcome to Data Component</h1></center><hr/>
      <div className="row">
      <div className="col-md-5">
        <button className="btn btn-success" onClick={()=>showForm()}>Add
        </button>
        <br/><br/>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>delData(student.id)}>Delete</button>
                  &emsp;
                  <button className="btn btn-warning">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-3"></div>

      <div className="col-md-4">
        { st &&
        <div>
        <label>Name</label><br/>
        <input type="text" className="form-control"onInput={(e)=>setName(e.target.value)}/><br/>
        <label>Course</label><br/>
        <input type="text"className="form-control"onInput={(e)=>setCourse(e.target.value)}/><br/><br/>
        <button className="btn btn-success" onClick={()=>AddRecord()  }>Add</button>
      </div>
}

      </div>
    </div>
    </div>
  );
}

export default Data; 