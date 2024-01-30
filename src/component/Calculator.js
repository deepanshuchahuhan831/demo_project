import React from "react";
function Calculator()
{
    var a=0,ch=''
    function getdata(str){
        document.getElementById ("ed").value+=str
    }
    function getOpr(s)
    {
       a= parseInt(document.getElementById("ed").value)
    document.getElementById("ed").value="";
ch=s    
}

function cl()
{
    var t=parseInt(document.getElementById("ed").value)
    t=parseInt(t/10)
    if(t>0)
    document.getElementById("ed").value=t
else
document.getElementById("ed").value=""

}
function getResult()
{
    var c=0;
    var b=parseInt(document.getElementById("ed").value)
    if(ch=='+')
    c=a+b
if(ch=='-')
c=a-b
if(ch=='*')
c=a*b
if(ch=='/')
c=a/b;
document.getElementById("ed").value=c;
}
    return(
        <div>
            
           <center><h1>Welcome to Calculator Component</h1></center><hr/>
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6"style={{ border: "2px solid black", padding: "10px" }}>
                <table>
                    <th><tr>
                <td><input type="text" id="ed"></input></td>
                &emsp;&emsp;
                <td><button  className="btn btn-danger" onClick={()=>cl()}>CLS</button></td></tr></th>
                <br/>
                <br/><tr>
                <button className="btn btn-success"  onClick={()=>getdata('1')}>1</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-success"onClick={()=>getdata('2')}>2</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-success"onClick={()=>getdata('3')}>3</button>&emsp;&emsp;&emsp;&emsp;
                <button  className="btn btn-success" onClick={()=>getOpr('+')}>+</button>
                </tr>
                <br/>

                <button  className="btn btn-danger"onClick={()=>getdata('4')}>4</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-danger"onClick={()=>getdata('5')}>5</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-danger"onClick={()=>getdata('6')}>6</button>&emsp;&emsp;&emsp;&emsp;
                <button  className="btn btn-danger" onClick={()=>getOpr('-')}>-</button>
                <br/>
                <br/>
                <button  className="btn btn-primary"onClick={()=>getdata('7')}>7</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-primary"onClick={()=>getdata('8')}>8</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-primary" onClick={()=>getdata('9')}>9</button>&emsp;&emsp;&emsp;&emsp;
                <button  className="btn btn-primary" onClick={()=>getOpr('*')}>*</button>
                <br/>
                <br/>
                <button  className="btn btn-info">.</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-info"onClick={()=>getdata('0')}>0</button>&emsp;&emsp;&emsp;
                <button  className="btn btn-info" onClick={()=>getResult()}>=</button>&emsp;&emsp;&emsp;&emsp;
                <button  className="btn btn-info"  onClick={()=>getOpr('/')}>/</button>
                </table>
            </div>
            </div>
            
        </div>
        

        
    )

}

export default Calculator;