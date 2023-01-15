import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3> Welcome to Frederik's Exam Project </h3>
      <br />
      <Link to="/contentpage">Go to content page</Link>
      <Outlet />
    </div>
  );
};

export default Home;
