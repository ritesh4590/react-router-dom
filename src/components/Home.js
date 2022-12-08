import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navToPage = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h1>Home Page Loaded</h1>
      <p>This is Home page of our awesome app</p>
      <p>And here we are learning about routes</p>
      <Link to="/about">Go to About page</Link>
      <br />
      <button onClick={() => navToPage("/contact")}>Contact</button>
      <button onClick={() => navToPage("/filter")}>Filter</button>
    </div>
  );
};

export default Home;
