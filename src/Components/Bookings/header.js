import React from 'react'
import './booking.css'
import img_logo from "../Images/logo.png"

function Header() {
  return (
    <>
    {/* <div className="navbar">
    <div className="logo-container1">
        <img className="company-logo" src={img_logo} alt="Company Logo" />
        <form class="d-flex" role="search">
          <input class="form-control me-2 abc" type="search" placeholder="Search" aria-label="Search"/>   
    </form>
    </div>
   </div> */}
   <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand"><img src={img_logo}/></a>
    <form class="d-flex" role="search" method='post' action='#'>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
</>
  )
}

export default Header