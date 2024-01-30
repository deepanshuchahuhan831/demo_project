import React from "react";
import { Link } from "react-router-dom";
 
function Nav ()
{
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Opr">Opr</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Calculator">Calaulator</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Data">Data</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/API1">API1</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/API2">API2</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Raj">Raj</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/api3">API3</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/API4">API4</Link>
        </li>
   </ul>
   
   </div>
   </div>
   </nav>
    )  
}
export default Nav;