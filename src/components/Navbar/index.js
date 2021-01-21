import React, { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
      <div class="container">
        <Link to="/" class="navbar-brand"> Start Bootstrap </Link>
        {open ? <button
        onClick={() => setOpen(!open)}
         class="navbar-toggler navbar-toggler-right collapsed"
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarResponsive" 
          aria-controls="navbarResponsive" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
        :
        <button
           onClick={() => setOpen(!open)}
         class="navbar-toggler navbar-toggler-right"
         type="button" data-toggle="collapse"
         data-target="#navbarResponsive"
         aria-controls="navbarResponsive"
         aria-expanded="true" 
         aria-label="Toggle navigation">Menu<i class="fas fa-bars"> </i>
      </button>}
      
{open ? <div class="navbar-collapse collapse" id="navbarResponsive" >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <Link to="/" class="nav-link" >HOME<span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
          <Link to="/about/" class="nav-link" >About</Link>
          </li>
          <li class="nav-item">
          <Link to="/post/blog1" class="nav-link" >Sample Post</Link>

          </li>
          <li class="nav-item">
          <Link to="/contact/" class="nav-link " >Contact</Link>	
          </li>
        </ul>
      </div>:<div class="navbar-collapse collapse show" id="navbarResponsive" >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <Link to="/" class="nav-link" >HOME<span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link to="/about/" class="nav-link" >About</Link>
          </li>
          <li class="nav-item">
          <Link to="/post/blog1" class="nav-link" >Sample Post</Link>
          </li>
          <li class="nav-item">
          <Link to="/contact/" class="nav-link " >Contact</Link>
          </li>
        </ul>
      </div>}
      </div>
      </nav>

    </>

  )
}

export default Navbar;
