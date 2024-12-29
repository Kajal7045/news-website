import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar({setcategeory}) {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"   style={{ cursor:"pointer" }} >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMarg</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
        <li class="nav-item">
          <div class="nav-link" href="#" onClick={()=>setcategeory("technology")}>Technology</div>
        </li>

        <li class="nav-item">
          <div class="nav-link" href="#" onClick={()=>setcategeory("business")}>Busniness</div>
        </li>

        <li class="nav-item">
          <div class="nav-link" href="#" onClick={()=>setcategeory("health")} >Health</div>
        </li>

        <li class="nav-item">
          <div class="nav-link" href="#" onClick={()=>setcategeory("sports")}>sports</div>
        </li>

        <li class="nav-item">
          <div class="nav-link" href="#" onClick={()=>setcategeory("entertainment")}>Entertainment</div>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
