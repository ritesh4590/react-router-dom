import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("username");
  const city = searchParams.get("city");
  console.log(`user's name is ${username} and he belongs to ${city} city`);
  return (
    <div>
      <h1>Filter</h1>
      <h3>{`user's name is ${username} and he belongs to ${city} city`}</h3>
      <p>This is Filter page of our awesome app</p>
      <p>And here we are learning about routes</p>
    </div>
  );
};

export default Filter;
