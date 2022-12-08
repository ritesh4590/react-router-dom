import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const checkActive = (match, location) => {
  console.log("location->", window.history.location);
  //some additional logic to verify you are in the home URI
  if (!location) return false;
  const { pathname } = location;
  console.log(pathname);
  return pathname === "/";
};
function Navbar() {
  // console.log("location->", window.location);
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink to="/" className="navbarLink" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbarLink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbarLink">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/filter" className="navbarLink">
            Filter
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
