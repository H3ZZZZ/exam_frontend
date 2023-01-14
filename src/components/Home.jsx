import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3> Homepage </h3>
      <Link to="/person">Show a Person</Link>
      <Outlet />
    </div>
  );
};

export default Home;
