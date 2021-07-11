import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Banking">
          <li>Transfer Money</li>
        </Link>
        <Link to="/CoustomerData">
          <li>Coustomer Data</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
