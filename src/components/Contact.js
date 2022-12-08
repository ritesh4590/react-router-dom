import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is Contact page of our awesome app</p>
      <p>And here we are learning about routes</p>
      <div className="nestedLink">
        <Link to="company">company</Link>
        <Link to="channel">channel</Link>
        <Link to="other">other</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
