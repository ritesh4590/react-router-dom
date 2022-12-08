import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const param = useParams();
  const location = useLocation();
  const { name } = param;
  console.log(location);
  return (
    <div>
      <h1>This is {name} page</h1>
    </div>
  );
};

export default User;
