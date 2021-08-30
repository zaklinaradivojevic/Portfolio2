import React from "react";
import Typed from "react-typed";
import "./Home.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Let`s write some code</h1>
        <Typed
          className="typed-text"
          strings={["Let` s", "write", "some", "code"]}
          typedSpeed={40}
          backSpeed={60}
          loop
        />
        <Button  className="btn-main"  component={Link}  to="/contact" >
          Contact
        </Button>
      </div>
    </div>
  );
}
export default Header;