import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark ">
      <div className="container">
  <Link className="navbar-brand" to="/">
  <img
            className="logo"
            src="https://cdn2.iconfinder.com/data/icons/nature-1-6/48/37-128.png"
            alt="logo"
          />
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", border: "none" }}
          />
     </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
   </div> 
  </div>
</nav>

  );
}
export default Navbar;


