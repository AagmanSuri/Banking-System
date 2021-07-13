import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <Link className="Link" to="/">
          <li className="Link">Home</li>
        </Link>
        <Link className="Link" to="/Banking">
          <li className="Link">Transfer Money</li>
        </Link>
        <Link className="Link" to="/CoustomerData">
          <li className="Link">Coustomer Data</li>
        </Link>
        <Link className="Link" to="/Transcations">
          <li className="Link">Transcations</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
