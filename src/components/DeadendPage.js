import React from "react";
import { Link } from "react-router-dom";

const DeadendPage = () => {
  return (
    <div className="deadendPage">
      Sorry! We can't find the page you are looking for.
      <Link to={"/"}>
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default DeadendPage;
