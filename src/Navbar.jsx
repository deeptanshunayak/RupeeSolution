import React from "react";
import { NavLink } from "react-router-dom";
import web1 from "../src/images/Rupee solutions.svg";
const Navbar=()=>{
return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

           
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="/"> <img src={web1} className="img-fluid animated"  alt="home img"/></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active fade-in" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active fade-in"  to="/">Loans</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active fade-in"   to="/">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active fade-in"  to="/contactus">Conatct Us</NavLink>
        </li>
        
      
      </ul>
     
    </div>
  </div>
</nav>
</div>
        </div>
    </div>
    </>
)
}
export default Navbar;