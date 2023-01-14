import { useEffect, useState } from "react";
import React from "react";

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("");

  useEffect(() => {
    /*TODO*/
  }, []);

  return (
    <div>
      <h2>Logged in</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}

export default LoggedIn;
