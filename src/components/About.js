import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> About Page loaded</h1>
      <p>This is About page of our awesome app</p>
      <p>And here we are learning About routes</p>
      <Link to="/">Go to Home page</Link>
      <ul>
        <li>
          <Link to="/user/ritesh">Ritesh</Link>
        </li>
        <li>
          <Link to="/user/monu">Monu</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
