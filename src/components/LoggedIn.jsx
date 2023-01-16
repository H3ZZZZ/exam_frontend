import React from "react";
import facade, { getUserName } from "../apiFacade";

function LoggedIn() {
  return (
    <div>
      <h2>Logged in as {getUserName()} </h2>
    </div>
  );
}

export default LoggedIn;
