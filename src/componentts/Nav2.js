import React from "react";

export default function Nave2(){
    return(
       <>
       <nav class="navbar navbar-expand-lg bg-primary fixed-bottom ">
       <div class="container-fluid">
         <a class="navbar-brand text-light" href="#">Navbar</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link text-light" href="#">Features</a>
             </li>
             <li class="nav-item">
               <a class="nav-link text-light" href="#">Pricing</a>
             </li>
           </ul>
         </div>
       </div>
     </nav>
       </> 
    )
}