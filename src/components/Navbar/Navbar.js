import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to='/'>
          <li>Logo</li>
        </Link>
        <Link to="/Banking">
          <li>Transfer Money</li>
        </Link>
        <li>Coustomer Data</li>
      </ul>
    </div>
  );
};

export default Navbar;
